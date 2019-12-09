import React, { Component } from 'react';
import ScoringHeader from '../scoring_header/scoring_header';
import CardList from '../cardList/card_list.component';
import singleCard from '../card/single_card.component';
import IntroducionData from './introduction_data';
import Pagination from '../paginate/pagebutton/pagebutton.component';
import QACollapse from '../collapse/collapse.component';
import QRmodal from '../modal/qrmodal.component';
import Formodal from '../modal/formmodal.component';
// import PostBlob from '../postblob/postblob.component';
import UniversalModule from '../universal_module/universal_module';
import pic from '../../images/dianpinglogo.svg'


import NewsCard from '../card/newscard.component';
import './Scoring_homepage.component.style.css'
import { newExpression } from '@babel/types';


class TitleOnImage extends Component {
  render() {
    return (
      <div style={{"position": "relative"}}>
        <img src="..." width='1140px' alt="" />
        <span style={{"position": "absolute", "top": "0", "left": "0", "color": "#666666"}}>
            <div className="vc_column-inner">
              <h2 id="fancy-title-6">
                <p style={{"font-weight":"400"}}>饭团外卖
                <br/>
                <div id="padding-21"></div>
                送餐随时随地
                </p>
              </h2>
            </div>
          <div id="padding-105"></div>
          <h2 className="vc_column-inner">
            <p id="fancy-title-15">
              <strong>饭团外卖于2014年创立于加拿大温哥华，秉承“让海外华人生活更轻松”的理念，致力于打造北美最受欢迎的“一站式”生活服务类平台。</strong>
            </p>
            <button className="button" style={{"background-color":"#1cb9b6"}}>
            <a href="#" target="_self" className="mk-button js-smooth-scroll mk-button--dimension-flat mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline">
              <span className="mk-button--text">点击立即体验</span>
            </a>
            </button>
          </h2>
        </span>
      </div>
    )
  }
}


class ScoringHomepage extends Component {
    constructor(props) {
      super(props)
      this.confirm = this.confirm.bind(this)
      this.showModal = this.showModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.state = {
        visible: false,
        renderData:IntroducionData,
      }
    }
  
    showModal() {
      this.setState({ visible: true })
    }
  
    closeModal() {
      console.log('我是onClose回调')
    }
  
    confirm() {
      console.log('我是confirm回调')
    }
  
    render() {
      const { visible } = this.state
      return <div className="app">
        
        <ScoringHeader />


        <div>
            <h1>不知吃啥？上饭团点评查一查</h1>
        </div>

        <QRmodal title="开始使用" />

        <div className="block">
          <h2>点评特点优势</h2>
          <p>
            Making your life easier is our top priority. Five-star service gets you what you need，
            <br />
            right when you need it.
          </p>
        
          <div className="container">
          <div className="row"> 
            <NewsCard />
            <div className="card-col">
              <NewsCard />
            </div>
            <NewsCard />
          </div>
          </div>
        </div>

        <div className="block" style={{"background-color": "#F6F6F6"}}>
          <h2>点评的功能</h2>
          <p>
            Making your life easier is our top priority. Five-star service gets you what you need，
            <br />
            right when you need it.
          </p>
        
          <div className="container">
          <div className="row">
            <NewsCard />
            <div className="card-col">
              <NewsCard />
            </div>
            <NewsCard />
          </div>
          </div>

          <div style={{"padding":"22px"}}></div>

          <div className="container">
          <div className="row">
            <NewsCard />
            <div className="card-col">
              <NewsCard />
            </div>
            <NewsCard />
          </div>
          </div>
        </div>

        {/* <CardList {...this.state}/> */}
        {/* <Pagination {...this.state} ItemComponent={singleCard}/> */}
        {/* <FormInput /> */}
        {/* <JoinUs /> */}
        <QACollapse />
        <Formodal />
        {/* <PostBlob /> */}
	{/* <UniversalModule title="ABC" content="abcabc" img={pic} ItemComponent={QRmodal} /> */}
      </div>
    }
  }

  export default ScoringHomepage;
  
