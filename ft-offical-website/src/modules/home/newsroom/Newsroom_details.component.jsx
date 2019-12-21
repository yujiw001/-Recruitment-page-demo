/* Create by Chelly P */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import NewsData from '../fake_data/news_data';

import '../../../assets/css/Details_page.css';

class NewsroomDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            newsdata: NewsData,
            current_id: this.props.match.params.newspost
        };
    }

    render() {
        console.log(this.props);
        const { newsdata } = this.state;
        const target_news = newsdata.find( data => data.id == this.state.current_id );
        var content = target_news.content;

        return(
            <div>
                <Header />
                <div className='ft-news-container-bg'>
                <div className='container'>
                    <div className='fh_news_det_path'>
                        <Link className='path_option' to="/">Home</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/news">Newsroom</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option'>News details</Link>
                    </div>

                    <h1 className='ft-w1140-section-fs40 fh_news_det_title'>
                        {target_news.title}
                    </h1>
                    <pre className='ft-w1140-section-fs16 fh_news_det_subtitle'>
                        By {target_news.user}    |    {target_news.date}
                    </pre>
                    <hr className='fh_news_det_divider' />
                    <p className='ft-w1140-text-fs18 fh_news_det_content' dangerouslySetInnerHTML = {{ __html:content }}></p>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NewsroomDetail;