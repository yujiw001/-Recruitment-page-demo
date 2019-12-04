import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import CarouselData from './carousel_data';

import '../css/Newsroom_details.component.css';

class NewsroomDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            carouseldata: CarouselData,
            current_id: this.props.match.params.rec_newspost
        };
    }

    render() {
        console.log(this.props);
        const { carouseldata } = this.state;
        const target_news = carouseldata.find( data => data.id == this.state.current_id );

        return(
            <div>
                <Header />
                <div className='container'>
                    <div className='fh_news_det_path'>
                        <Link className='path_option' to="/">Home</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/Recruitment">Careers</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option'>Career News details</Link>
                    </div>

                    <h1 className='fh_news_det_title'>
                        {target_news.title}
                    </h1>
                    <pre className='fh_news_det_subtitle'>
                        By {target_news.user}    |    {target_news.date}
                    </pre>
                    <hr className='fh_news_det_divider' />
                    <p className='fh_news_det_content'>{target_news.content}</p> 
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsroomDetail;