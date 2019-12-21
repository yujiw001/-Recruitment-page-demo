// =================================================================
// Program: Career.js - the career page in the office website 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import SlideShow from './recruitment/component/slideshow/slideshow.component';
import Jobmore from './recruitment/component/jobmore.component';

import Header from './Header';
import Footer from './Footer';

import './Career.css';

import JobData from './fake_data/position_data';

class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
        callerName: 'career',
        // the data read from the backstage database, waiting to be rendered
        renderData: JobData,
    };
  }

  render() {
    return (
        <>
          <Header callerName={this.state.callerName}/>

          <div className="ft-career-bg">
            <div className='ft_career_container'>
              <h1 className='ft-w1140-section-fs40 fh_rec_career'>Careers</h1>
              <SlideShow />
              <Jobmore />
            </div>
          </div>

          <Footer/>
        </>
    );
  }
}

export default Career;