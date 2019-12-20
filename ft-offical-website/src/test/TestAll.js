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

import './TestAll.css';


class DeliveryFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
       cdata: [{
            "id":"1",
            "imgSrc":"/imgs/test/cat-widget1.jpg",
            "slideTitle":"First slide label",
            "slideCaption":"Nulla vitae elit libero, a pharetra augue mollis interdum. slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum. slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum. slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum."
          },{
            "id":"2",
            "imgSrc":"/imgs/test/cat-widget2.jpg",
            "slideTitle":"Second slide label",
            "slideCaption":"Nulla vitae elit libero, a pharetra augue mollis interdum."
          },{
            "id":"3",
            "imgSrc":"/imgs/test/cat-widget3.jpg",
            "slideTitle":"Third slide label",
            "slideCaption":"Nulla vitae elit libero, a pharetra augue mollis interdum.slideCaption Nulla vitae elit libero, a pharetra augue mollis interdum."
          }],

          carouselData: [{
            "id":"1",
            "imgSrc":"/imgs/delivery/cat-widget1.jpg",
            "name":"Wukong Sun",
            "year":"3 years",
            "comment":"“I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! There’s no shortage of technical challenges here that also have meaningful impact, which really excited me when I took the job at Uber.”"
          },{
            "id":"2",
            "imgSrc":"/imgs/delivery/cat-widget2.jpg",
            "name":"Bajie Zhu",
            "year":"2 Months",
            "comment":"I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! "
          },{
            "id":"3",
            "imgSrc":"/imgs/delivery/cat-widget3.jpg",
            "name":"SengTang",
            "year":"10 years",
            "comment":"I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! There’s no shortage of technical challenges here that also have meaningful impact."
          },{
            "id":"4",
            "imgSrc":"/imgs/delivery/delivery-dachu.jpg",
            "name":"Wukong Sun",
            "year":"5 years",
            "comment":"I love that even though Uber has grown so much in the past few years, there’s still the spirit that we’re truly building access to transportation and that we still move fast! There’s no shortage of technical challenges here that also have meaningful impact, which really excited me when I took the job at Uber."
          }],

          // ---- CSSTransition ----
          list: [],

          number:0,
          show: true,
          isTop: true,
          widthOfWin: window.innerWidth,
          backgroundColor: '#FFFFFF',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.onClick = this.onClick.bind(this);

    // ---- CSSTransition ----
    this.handleAddItem = this.handleAddItem.bind(this);

  }


  onClick() {
    console.log('clicked ');
    this.setState({backgroundColor: '#23C2C2'}); 
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
    const isTop = window.scrollY < 100;
    if (isTop !== this.state.isTop) {
        this.setState({ isTop })
    }
  }   

  updateWindowDimensions() {
    this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
    if (this.state.widthOfWin >= 993) {
      this.setState({widthOfImage: '66%'});
    } else if (this.state.widthOfWin >= 979 && this.state.widthOfWin <= 992) {
      this.setState({widthOfImage: '58%'});
    } else if (this.state.widthOfWin >= 751 && this.state.widthOfWin <= 978) {
      this.setState({widthOfImage: '55%'});
    } else if (this.state.widthOfWin >= 376 && this.state.widthOfWin <= 750) {
      this.setState({widthOfImage: '65%'});
    } else {
      this.setState({widthOfImage: '77%'});
    }
    // increase = 1140/375;
    
  }

// ---- CSSTransition ----
handleAddItem() {
    this.setState((prevState) => {
        return {
            list: [...prevState.list, 'item']
        }
    })
}


  render() {

    console.log('window width: '+this.state.widthOfWin);


    const customPanelStyle = {
      background: '#f7f7f7',
      // borderRadius: 4,
      // marginBottom: 24,
      // border: 0,
      // overflow: 'hidden',
    };
    
    const customPanelStyleA = {
      background: '#f7f7f7',
      // borderRadius: 4,
      // marginBottom: 24,
      // border: 0,
      // overflow: 'hidden',
    };


    return (
      <>
        <div className="fd-partner-4steps-bg">
          <div className="fd-partner-4steps-content">

          <p class="content">综合考虑</p>
          <div class="test"></div>
          <div id="underline"></div>

          {/* ---- CSSTransition ---- */}
          <div>
            {/* <Fragment> */}
            <TransitionGroup>
                {
                    this.state.list.map((item, index) => {
                        return (
                            <CSSTransition
                                timeout={5000}
                                classNames='fade'
                                unmountOnExit
                                onEntered={(el) => {el.style.color='blue'}}
                                appear={true}
                                key={index}
                            >
                                <div>{item}</div>
                            </CSSTransition>
                        )
                    })
                }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
          {/* </Fragment> */}
          </div>



          </div>
        </div>


        {/* 4 simple steps */}
        <div className="fd-partner-4steps-bg">
          <div className="fd-partner-4steps-content">
            <CardGroup>
              <Card className="col-auto cardColAuto">
              <Card.Body>
                <Card.Title className="text-center fd-partner-4steps-title">4 simple steps to get started</Card.Title>
                <Card.Text className="fd-partner-4steps-text">
                  Eliminate inconvenient processes and share high customer traffic. 
                </Card.Text>
              </Card.Body>
              <CardDeck className="row cardDeckRow">
                <Card className="col-sm-6">
                  <Card.Body>
                    <img className="fd-partner-4steps-img" src={require('../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 1"/>
                    <Card.Title className="text-center fd-partner-4steps-subtitle">Partner with Fantuan</Card.Title>
                    <Card.Text className="fd-partner-4steps-text">
                      Submit the application, you will be contacted shortly after
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-sm-6">
                <Card.Body>
                <img className="fd-partner-4steps-img" src={require('../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 2"/>
                  <Card.Title className="text-center fd-partner-4steps-subtitle">Sign the Contract</Card.Title>
                  <Card.Text className="fd-partner-4steps-text">
                    Exclusive contract protects your best interests
                  </Card.Text>
                </Card.Body>
                </Card>
                <Card className="col-sm-6">
                  <Card.Body>
                  <img className="fd-partner-4steps-img" src={require('../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 3"/>
                    <Card.Title className="text-center fd-partner-4steps-subtitle">Install the Tablet</Card.Title>
                    <Card.Text className="fd-partner-4steps-text">
                      Quick and easy order notification and information
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-sm-6">
                <Card.Body>
                <img className="fd-partner-4steps-img fd-partner-4steps-img-4" src={require('../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 4"/>
                  <Card.Title className="text-center fd-partner-4steps-subtitle">Online Operations</Card.Title>
                  <Card.Text className="fd-partner-4steps-text">
                    More exposure channels to attract more customers
                  </Card.Text>
                </Card.Body>
                </Card>
              </CardDeck>
              </Card>
            </CardGroup>
            <h1 className="fd-partner-4step-getstart">Get started</h1>
            <div className="fd-partner-4step-button">
                <Button className="fd-partner-4step-join" href="link-1">
                    <img className="fd-partner-with-button-img" src={require('../assets/imgs/icon/delivery-deliver-document@2x.png')}
                    width="21px"
                    height="21px"
                    alt="Join Now"/>
                    Join Now
                </Button>
            </div>
          </div>
        </div>









        <div className="fd-faq-general-bg">
          <div className="fd-faq-general-content">
            <div className="fd-test">
              <div className="fd-test-div1">
                <span className='desc'>常见问题</span>
              </div>
              <div className="fd-test-div2">
                <span className='desc'>test</span>
              </div>
              </div>
            </div>
        </div>


        <div className="fd-faq-general-bg">
          <div className="fd-faq-general-content">
            <div className="fd-test">
              <div className="fd-test-div1">
                <span className='desc1'>常见问题</span>
              </div>
              <div className="fd-test-div2">
                <span className='desc2'>test</span>
              </div>
              </div>


            </div>
        </div>






      <div className="fd-test-about-bg">
        <div className="fd-test-about-content">
        { this.state.widthOfWin >= 570 ?
          <Carousel className="fd-test-about" interval="5000" controls="false" indicators="true" prevLabel="" nextLabel="" pauseOnHover="true" fade="true">
            {this.state.cdata.map((ft,index) =>
            <Carousel.Item key={index}>
              <Container fluid="true" className="fd-test-about-con">
                <Row noGutters="true">
                  <Col>
                    <div className="fd-test-about-card-title">{ft.slideTitle}</div>
                    <div className="fd-test-about-card-caption">{ft.slideCaption}</div>
                  </Col>
                  <Col>
                    <img className="fd-test-about-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            )}
          </Carousel>
          :
          <Carousel className="fd-test-about" interval="5000" controls="true" indicators="false" pauseOnHover="true" fade="true">
            {this.state.cdata.map((ft,index) =>
            <Carousel.Item key={index}>
              <Container fluid="true" className="fd-test-about-con">
                <Row>
                  <Col>
                    <img className="fd-test-about-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="fd-test-about-card-title">{ft.slideTitle}</div>
                    <div className="fd-test-about-card-caption">{ft.slideCaption}</div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            )}
          </Carousel>
        }
        </div>
      </div>

    </>
   );
  }
  
}

export default DeliveryFAQ;