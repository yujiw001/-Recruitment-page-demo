/* Create by Chelly P on 11/27/2019 */
import React, { Component } from 'react';
import '../css/Newsroom_page.component.css';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import NewsMore from '../collapse/newsmore.component';
import NewsData from '../pages/news_data';

class Newsroom extends Component {

    constructor(props) {
        super(props)
        this.state = {
            renderData: NewsData,
        };
    }

    render() {
        return (
            <div>
                <Header />

                <div className='container'>

                    <NewsMore />
                    
                </div>

                <Footer/>
            </div>
        )
    }
}

export default Newsroom;
