import React, { Component } from 'react';
import NewsCard from '../card/newscard.component';
import NewsData from '../pages/news_data';
import NewsCollapse from '../collapse/newscollapse.component';
import axios from 'axios';
class NewsMore extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indexList: [],
            totalNews: 11,
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
    componentDidMount() {
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