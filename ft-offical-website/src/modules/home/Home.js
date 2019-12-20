// =================================================================
// Program: Home - the home of the office website
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// Note   : It was canceled
// =================================================================

import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <div>
          <h2>公司首页</h2>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;