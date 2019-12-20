import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import Header from '../../../component/header/header.component';
// import Footer from '../../../component/footer/footer.component';

import Header from '../Header';
import Footer from '../Footer';

import CarouselData from '../fake_data/carousel_data';

import '../../../assets/css/Details_page.css';

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
                <div className="ft-news-details-bg">
                <div className='ft-container-bg'>
                    <div className='fh_news_det_path'>
                        <Link className='path_option' to="/">Home</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/career">Careers</Link>
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
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsroomDetail;