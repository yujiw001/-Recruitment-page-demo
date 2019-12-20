/* Create by Chelly P */
import React, { Component } from 'react';

import NewsCard from './newscard.component';
import NewsCollapse from './newscollapse.component';

import NewsData from '../../fake_data/news_data';

class NewsMore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indexList: [],
            totalNews: NewsData.length
        };
    }

    componentWillMount() {
        this.setState({
            indexList: this.timeSorting()
        }) 
    }

    timeSorting() {
        var sortedList = NewsData;
        sortedList.sort(function(a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        return sortedList;
    }

    render() {
        return (
            <div>
                <h1 className='ft-w1140-section-fs40 fh_news_title'>Fantuan News</h1>
                <p className='ft-w1140-section-fs16 fh_news_title_contact'>Advertising information please contact us pr@fantuan.ca</p>

                <div className='fh_news_cardgroup'>
                    {
                        this.state.indexList.slice(0,9).map(({ ...otherCollectionProps }) => (
                            <NewsCard { ...otherCollectionProps } />
                        ))
                    }
                </div>
                <NewsCollapse { ...this.state } />
            </div>
        )
    }
}

export default NewsMore;