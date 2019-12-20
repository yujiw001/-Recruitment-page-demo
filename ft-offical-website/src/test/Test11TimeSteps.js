import React, { Component, useState } from 'react';
import { Collapse, Icon } from 'antd';
// import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import { Spring } from'react-spring';


import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

import { Transition, CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';


// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

import './Test11TimeSteps.css';
import { SSL_OP_SINGLE_DH_USE } from 'constants';


class DeliveryFAQ extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  widthOfWin: window.innerWidth,
		  heightOfWin: window.innerHeight,
		  heightToTop: window.scrollY,
		  opacityVar: 1,
		  moveRate: 30,

		  tsheight: 0,
		  tstop: 0,
		  tsleft: 0,
		  tsbottom: 0,
		  tsright: 0,
		  tsheightp: 100,
		};

		// it has some problem here!
		// this.getInnerInfo = this.refs.inner;
		// this.getInnerValue = this.getInnerInfo.value;
		// this.getInnerRect = this.getInnerInfo.getBoundingClientRect();

		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	  }
	
	  componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions.bind(this));
		window.addEventListener('scroll', this.handleScroll);
	  }
	
	  componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
		window.removeEventListener('scroll', this.handleScroll);
	  }
	
	  handleScroll(event) {
		// const fadeHeitht = 300;
		this.setState({heightToTop: window.scrollY});

		// if (this.state.heightToTop > 0 && this.state.heightToTop <= fadeHeitht) {
		//   this.setState({opacityVar: 1 - (1/fadeHeitht) * this.state.heightToTop});
		// } else 
		//   this.setState({opacityVar: 1});
		
		var getInnerInfo = this.refs.inner;
		// var getInnerValue = getInnerInfo.value;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			tstop: getInnerRect.top,
			tsheight: getInnerRect.height,
			tsbottom: getInnerRect.bottom,
		});
		console.log("rect: ",this.getInnerRect);

	  }  
	  
	  updateWindowDimensions() {
		this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
	  }
	

render() {
	
	// it doesn't work here!!!
	// var getInnerInfo = this.refs.inner;
	// var getInnerValue = getInnerInfo.value;
	// var getInnerRect = getInnerInfo.getBoundingClientRect();

	let classactive = [];
	let difHeight = this.state.heightToTop - this.state.tsheight; 
	let tsHeightStyle = {height: '0%', };
 
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*1){
		classactive[0] = "d-flex align-items-center active";
		// 1/7 * 1 = 14.29%
		tsHeightStyle = {height: '14.29%', };
	} else {
		classactive[0] = "d-flex align-items-center";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*2) {
		classactive[1] = "d-flex align-items-center active";
		// 1/7 * 2 = 28.57%
		tsHeightStyle = {height: '28.57%', };
	} else {
		classactive[1] = "d-flex align-items-center";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*3) {
		classactive[2] = "d-flex align-items-center active";
		// 1/7 * 3 = 42.86%
		tsHeightStyle = {height: '42.86%', };
	} else {
		classactive[2] = "d-flex align-items-center";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*4) {
		classactive[3] = "d-flex align-items-center active";
		// 1/7 * 4 = 57.14%
		tsHeightStyle = {height: '57.14%', };
	} else {
		classactive[3] = "d-flex align-items-center";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*5) {
		classactive[4] = "d-flex align-items-center active";
		// 1/7 * 5 = 71.43%
		tsHeightStyle = {height: '71.43%', };
	} else {
		classactive[4] = "d-flex align-items-center";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*6) {
		classactive[5] = "d-flex align-items-center active";
		// 1/7 * 6 = 85.71%
		tsHeightStyle = {height: '85.71%', };
	} else {
		classactive[5] = "d-flex align-items-center";
	}
	if	(difHeight > 0 && this.state.heightToTop >= this.state.tstop + (this.state.tsheight/7)*7) {
		classactive[6] = "d-flex align-items-center active";
		// 1/7 * 7 = 100%
		tsHeightStyle = {height: '100%', };
	} else {
		classactive[6] = "d-flex align-items-center";
	}

    return (
        <>
            <div className="ft-time-steps-bg">
              <div className="ft-time-steps-content">
				<ul ref="inner" class="nav flex-column time-steps d-none d-lg-flex">
					<div class="indicator" style={tsHeightStyle}></div>
					<li class={classactive[0]}>
					<span>1</span><h5 class="heading mb-0">与客户沟通</h5>
					</li>
					<li class={classactive[1]}>
					<span>2</span><h5 class="heading mb-0">研究调查</h5>
					</li>                                                
					<li class={classactive[2]}>
					<span>3</span><h5 class="heading mb-0">头脑风暴</h5>
					</li>                                                
					<li class={classactive[3]}>
					<span>4</span><h5 class="heading mb-0">开始矢量设计</h5>
					</li>                                                
					<li class={classactive[4]}>
					<span>5</span><h5 class="heading mb-0">完成演示稿</h5>
					</li>                                                
					<li class={classactive[5]}>
					<span>6</span><h5 class="heading mb-0">轻微改稿</h5>
					</li>                                                
					<li class={classactive[6]}>
					<span>7</span><h5 class="heading mb-0">完成并交付</h5>
					</li>
				</ul>

				{/* <div style={{width:'0.5',height:'0.5', border: 'solid 1px black',}}>
					abc
				</div> */}
			</div>
		</div>
        </>
    );
    }
}

export default DeliveryFAQ;