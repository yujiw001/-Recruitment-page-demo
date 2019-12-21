/* Create by Chelly P */
import React, { Component } from 'react';

import NewsCard from './newscard.component';
import NewsCollapse from './newscollapse.component';

import NewsData from '../../fake_data/news_data';

import './newsmore.component.style.css';

class NewsMore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indexList: [],
            totalNews: NewsData.length,
        };
    }

    // componentDidMount() {
    //     console.log('hdfy')
    //     let self=this;
    //     axios({
    //         method: 'get' ,
    //         url: 'http://localhost:3000/news/display' ,
    //     })
    //     .then(function (response) {
    //         console.log(response.data[4]['type']);
    //         // console.log(JSON.stringify(response.data))
    //         var target=JSON.stringify(response.data)
    //         self.setState({indexList:target}, ()=>{
    //             console.log(self.state.indexList);
    //         })
    //         // console.log(self.state.indexList);
    //       })
    //     .catch(function (error) {
    //         console.log(error);
    //       });
        
    // }
    /* componentDidMount() {
        console.log('hdfy')
        axios({
            method: 'get' ,
            url: 'http://localhost:3000/news/display' ,
        })
        .then((response) => {
            console.log(response.data[4]['type']);
            // console.log(JSON.stringify(response.data))
            var target=response.data
            this.setState({indexList:target})
            // console.log(self.state.indexList);
          })
        .catch((error) => {
            console.log(error);
          });
    } */
    
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
                <div className='fh_news'>
                    <h1 className='ft-w1140-section-fs40 fh_news_title'>Fantuan News</h1>
                    <p className='ft-w1140-section-fs16 fh_news_title_contact'>Advertising information please contact us pr@fantuan.ca</p>
                </div>

                <div className='fh_news_group'>
                    {
                        this.state.indexList.slice(0,9).map(({ ...otherCollectionProps }) => (
                            <div>
                                <NewsCard { ...otherCollectionProps } />
                            </div>
                        ))
                    }
                </div>
                <div className='fh_news'>
                <NewsCollapse { ...this.state } />
                </div>
            </div>
        )
    }
}

export default NewsMore;