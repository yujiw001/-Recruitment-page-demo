// =================================================================
// Program: Fantuan.js - the fantuan of the office website
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// Note   : It was canceled
// =================================================================

// system components
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardGroup from 'react-bootstrap/CardGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
// import {Redirect,useHistory} from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

import styled from "styled-components";
import { Redirect,useHistory, Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


// css put in index.html
import Slider from "react-slick"; 

// use components
import Timeline from '../../components/timeline/Timeline';
import Content from '../../components/timeline/Content';
import ContentYear from '../../components/timeline/ContentYear';
import ContentBody from '../../components/timeline/ContentBody';
import Description from '../../components/timeline/Description';

import Header from './Header';
import Footer from './Footer';

// css
import './About.css';

// data
import CompanyHistoryData from './data/About.data_of_company_history';
import MapMatchWithContact from './data/About.data_of_map_contact';

// function HomeButton() {
//     let history = useHistory();
  
//     function handleClick() {
//       history.push("/home");
//     }
  
//     return (
//       <button type="button" onClick={handleClick}>
//         Go home
//       </button>
//     );
//   }

class Fantuan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            callerName: 'fantuan',
            textcolor:'red',
            changeColor: false,
            indexMap: 1,
            companyHistoryData: CompanyHistoryData,
            mapAdrs: MapMatchWithContact,

            // widthOfWin: window.innerWidth,
            // heightOfWin: window.innerHeight,
            heightToTop: window.scrollY,
            ts0top: 0,
            ts0height: 0,
            ts1top: 0,
            ts2top: 0,
            ts3top: 0,
            ts4top: 0,
            ts5top: 0,
            ts6top: 0,
            ts7top: 0,

            bgClassName: [
                "ft-about-best-bg",
                "ft-about-best-bg1"
            ],
            selectedBgClassName: "ft-about-best-bg",
            selectedFdImage: require('../../assets/imgs/bg/fantuan-about-best.jpg'),
            selectedBgColor: '#13C2C2',
            selectedLink: '/delivery',
        };
        this.handleMouseMoveOnDelivery = this.handleMouseMoveOnDelivery.bind(this);
        this.handleMouseMoveOnDianping = this.handleMouseMoveOnDianping.bind(this);
        this.handleMouseMoveDown = this.handleMouseMoveDown.bind(this);
        // this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions.bind(this));
        window.addEventListener('scroll', this.handleScroll);
        setInterval(() => {
            this.setState(prevState => {
              if (prevState.selectedBgClassName === this.state.bgClassName[0]) {
                return {
                  selectedBgClassName: this.state.bgClassName[1],
                  selectedFdImage: require('../../assets/imgs/bg/fantuan-about-best1.jpg'),
                  selectedBgColor: '#FF5151',
                  selectedLink: '/dianping',
                };
              } else {
                return {
                  selectedBgClassName: this.state.bgClassName[0],
                  selectedFdImage: require('../../assets/imgs/bg/fantuan-about-best.jpg'),
                  selectedBgColor: '#13C2C2',
                  selectedLink: '/delivery',
                };
              }
            });
          }, 4000);
    }
	
    componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
        window.removeEventListener('scroll', this.handleScroll);
    }
	
    handleScroll(event) {
        this.setState({heightToTop: window.scrollY});
    } 

    handleMouseMoveOnDelivery(e) {
        this.setState({
            selectedBgClassName: this.state.bgClassName[0],
            selectedFdImage: require('../../assets/imgs/bg/fantuan-about-best.jpg'),
            selectedBgColor: '#13C2C2',
            selectedLink: '/delivery',
        });
    }

    handleMouseMoveOnDianping(e) {
        this.setState({
            selectedBgClassName: this.state.bgClassName[1],
            selectedFdImage: require('../../assets/imgs/bg/fantuan-about-best1.jpg'),
            selectedBgColor: '#FF5151',
            selectedLink: '/dianping',
        });
    }

    handleMouseMoveDown(e) {
        if (this.state.heightToTop > 1){
            // return ( <Redirect to="/about" />);
            return <Redirect to="/about" push={true} />
        }

        if (e.type === "mousedown") {
            console.log("mouse down!")
            // this.setState({ message: "Mouse Down"});
        } else {
            // this.setState({ message: "Mouse Up"});
            console.log("mouse up!")
        }
    }
    
    // handleMouseEnter(e) {
    //     console.log("mouse enter",e);
    //     this.setState(this.state);
    //     var newColor = '#66666';
    //     this.setState({
    //         backgroundColor:newColor,
    //         textcolor:'yellow'
    //     });
    // }

    updateWindowDimensions() {
		this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
    }

    render() {
    
        let aboutBestBtnStyle = {
            backgroundColor: this.state.selectedBgColor,
        };

        if (this.state.heightToTop >= 300){
            // const history = createHistory();
            // history.push("/about");
            return <Redirect to="/about"/>
        }

        console.log("height To Top:", this.state.heightToTop);
    
        return (
            <>

            {/* <Wrapper>
            <TransitionGroup className="transition-group">
            <CSSTransition> */}

            {/* The best Asian food delivery */}
            <div className={this.state.selectedBgClassName} onMouseDown={this.handleMouseMoveDown}>
            <div className="ft-about-best-content">
                <Header callerName={this.state.callerName}/>
                <div className="ft-about-best-text-buttons">
                <p className="ft-about-best-thebest">The Best</p>
                    <strong className="ft-about-best-af blink">Asian Food</strong><br/>
                    <strong className="ft-about-best-del">Delivery</strong>
                    <br/>
                    <br/>
                <div className="ft-about-best-buttons">
                    <div>
                        <Button className="ft-w1140-button-fs16 ft-about-best-button0" style={aboutBestBtnStyle} variant="outline-light" href={this.state.selectedLink}>
                            Visit Website >
                        </Button>
                    </div>
                    <div className="ft-about-best-button12">
                        <Button className="ft-w1140-button-fs16 ft-about-best-button1" onMouseMove={this.handleMouseMoveOnDelivery} variant="outline-light" href="/delivery">
                            <img className="ft-about-best-buttons-img" src={require('../../assets/imgs/icon/delivery/fantuan-delivery-logo-color@2x.png')}
                            width="100%"
                            height="100%"
                            alt="To delivery"/>
                        </Button>
                        <Button className="ft-w1140-button-fs16 ft-about-best-button2" onMouseMove={this.handleMouseMoveOnDianping} variant="outline-light" href="/dianping">
                            <img className="ft-about-best-buttons-img" src={require('../../assets/imgs/icon/dianping/fantuan-dianping-logo@2x.png')}
                            width="100%"
                            height="100%"
                            alt="dianping"/>
                        </Button>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <Footer/>

            {/* </CSSTransition>
            </TransitionGroup>
            </Wrapper> */}

            </>
        );
    }
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default Fantuan;

