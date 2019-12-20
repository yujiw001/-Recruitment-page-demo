// =================================================================
// Program: News.js - the news page in the office website 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import NewsMore from './newsroom/component/newsmore.component';

import NewsData from './fake_data/news_data';

import Header from './Header';
import Footer from './Footer';

import './News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
        callerName: 'news',
        renderData: NewsData,
      };
  }

render() {
    return (
      <>
        <Header callerName={this.state.callerName}/>    

        <div className="ft-news-bg">
          <div className='container'>
              <NewsMore />
          </div>
        </div>

        <Footer/>
      </>
    );
  }
}

export default News;