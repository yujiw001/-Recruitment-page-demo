import React, { Component } from 'react';
import NewsCard from '../card/newscard.component';
import NewsData from '../pages/news_data';
import NewsCollapse from '../collapse/newscollapse.component';

class NewsMore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indexList: [],
            //totalData: NewsData,
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
                <h1 className='fh_news_title'>Fantuan News</h1>
                <p className='fh_news_title_contact'>Advertising information please contact us pr@fantuan.ca</p>

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