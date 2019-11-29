import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import UniversalModule from '../universal_module/universal_module';
import NewsData from './news_data';

import '../css/Newsroom_details.component.css';

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

        return(
            <div>
                <Header />
                <div className='container'>
                    <div className='fh_news_det_path'>
                        <Link className='path_option' to="/">Home</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/News">Newsroom</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option'>News details</Link>
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