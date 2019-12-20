import React, { Component } from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import CarouselData from '../../../fake_data/carousel_data';

import './slideshow.component.indicator.style.scss';
import './slideshow.component.style.css';

class SlideShow extends Component {

    constructor(props) {
        super(props)
        this.state={
            indexList: [],
            nav1: null,
            nav2: null,
        }
    }

    componentWillMount() {
        this.setState ({
            indexList: this.timeSorting()
        }) 
    }

    timeSorting() {
        var sortedList = CarouselData;
        sortedList.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        return sortedList;
    }

    componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
    }

    render() {
        const settings_1 = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "120spx",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
            pauseOnHover: true,
            nextArrow: null,
            prevArrow: null
          };
      
        const settings_2 = {
            dots: true,
            nextArrow: null,
            prevArrow: null,
            appendDots: dots => (
                <div 
                style={{
                    top: '39px',
                    'text-align': 'right'
                }}
                >
                <ul> {dots} </ul>
                </div>
            ),
        }; 

        return (
            <div>
                <Slider className="ft-career-slider1"
                asNavFor={this.state.nav2}
                ref={slider => (this.slider1 = slider)}
                {...settings_1}
                >
                    {
                        this.state.indexList.slice(0, 3).map((carousel, index) => (
                            // <Link key={index} to={`/Recruitment/news_details/${carousel.id}`}>
                            <Link key={index} to={`/career/news_details/${carousel.id}`}>
                                <img key={index} src={carousel.cover} className='fh_rec_carousel_img' />
                            </Link>
                        )
                        )
                    }
                </Slider>

                <Slider className="ft-career-slider2"
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={1}
                fade={true}
                {...settings_2}
                >
                    {
                        this.state.indexList.slice(0, 3).map((carousel, index) => (  
                            <div>
                                <h3 className='fh_rec_carousel_title' >
                                    {carousel.title}
                                </h3>
                                <p className='fh_rec_carousel_content' key={index}>
                                    {carousel.content}
                                </p>
                            </div> 
                        )
                        )
                    }
                </Slider>
            </div>
        )
    }
}

export default SlideShow;