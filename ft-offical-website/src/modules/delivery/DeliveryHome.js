// =================================================================
// Program: DeliveryHome.js - the home page of the delivery
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import { FormattedMessage} from 'react-intl';

import Header from './DeliveryHeader';
import Footer from './DeliveryFooter';

import './DeliveryHome.css';

import AboutUsCarouselData from './data/DeliveryHome.about_us_carousel_data';
import AboutUsCarouselDataZh from './data/DeliveryHome.about_us_carousel_data_zh';

class DeliveryHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callerName: 'home',
      aboutUsCarouselData: AboutUsCarouselData,
      aboutUsCarouselDataZh: AboutUsCarouselDataZh,
      // cdata: () => {this.props.lang === 'en' ? AboutUsCarouselData:AboutUsCarouselDataZh},
      // cdata: [],
      widthOfWin: window.innerWidth,
      heightOfWin: window.innerHeight
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
  }

  render() {

    const {lang} = this.props;
    let cdata = this.props.lang === 'en' ? 
      this.state.aboutUsCarouselData : this.state.aboutUsCarouselDataZh;

    return (
      <>
        <Header callerName={this.state.callerName}/>

        {/* The best Asian food delivery */}
        <div className="fd-home-best-bg">
          <div className="fd-home-best-content">
            <img className="fd-home-best-bg-img" src={require('../../assets/imgs/bg/delivery-home-asian@2x.png')} alt=""/>
            <div className="fd-home-best-text-buttons">
                <div className="fd-home-best-thebest"><FormattedMessage id="fd_home_best_p1"/></div>
                <div><strong className="fd-home-best-af"><FormattedMessage id="fd_home_best_p2"/></strong></div>
                <div><strong className="fd-home-best-del"><FormattedMessage id="fd_home_best_p3"/></strong></div>
                <div className="fd-home-best-buttons">
                  <Button className="fd-home-best-button1 ft-w1140-button-fs16" variant="dark" href="link-1">
                    <img className="fd-home-best-buttons-img" src={require('../../assets/imgs/icon/file-download@2x.png')}
                    width="18px"
                    height="21px"
                    alt="Download the App"/>
                    <FormattedMessage className="fd-home-best-buttons-text" id="fd_home_best_button1"/>
                  </Button>
                  <Button className="fd-home-best-button2 ft-w1140-button-fs16" variant="outline-light" href="partner">
                    <div>
                    <img className="fd-home-best-buttons-img" src={require('../../assets/imgs/icon/delivery-partner@2x.png')}
                    width="36px"
                    height="24px"
                    alt="partner"/>
                    </div>
                    <div>
                    <FormattedMessage className="fd-home-best-buttons-text" id="fd_home_best_button2"/>
                    </div>
                  </Button>
                  <Button className="fd-home-best-button3 ft-w1140-button-fs16" variant="outline-light" href="deliver">
                    <img className="fd-home-best-buttons-img" src={require('../../assets/imgs/icon/delivery-deliver-eta@2x.png')}
                    width="29px"
                    height="25px"
                    alt="deliver"/>
                    <FormattedMessage className="fd-home-best-buttons-text" id="fd_home_best_button3"/>
                  </Button>
                </div>
            </div>
          </div>
        </div>

        {/* home about */}
        <div className="fd-home-about-bg">
          <div className="fd-home-about-content">
          { this.state.widthOfWin >= 570 ?
            <Carousel className="fd-home-about" interval="3500" controls="false" indicators="true" prevLabel="" nextLabel="" pauseOnHover="true" fade="true">
              {/* {this.state.cdata.map((ft,index) => */}
              {cdata.map((ft,index) =>
                <Carousel.Item key={index}>
                <Container fluid="true" className="fd-home-about-con">
                  <Row noGutters="true">
                    <Col>
                      <div className="fd-home-about-card-title ft-w1140-section-fs40">{ft.slideTitle}</div>
                      <div className="fd-home-about-card-caption ft-w1140-text-fs16">{ft.slideCaption}</div>
                    </Col>
                    <Col>
                      <img className="fd-home-about-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}
                          width="600px"
                          height="588px"
                          alt={ft.slideTitle}/>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              )}
            </Carousel>
            :
            <Carousel className="fd-home-about" interval="3500" controls="true" indicators="false" pauseOnHover="true" fade="true">
              {/* {this.state.cdata.map((ft,index) => */}
              {cdata.map((ft,index) =>
                <Carousel.Item key={index}>
                <Container fluid="true" className="fd-home-about-con">
                  <Row>
                    <Col>
                      <img className="fd-home-about-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="fd-home-about-card-title">{ft.slideTitle}</div>
                      <div className="fd-home-about-card-caption">{ft.slideCaption}</div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              )}
            </Carousel>
          }
          </div>
        </div>

        {/* our advantage */}
        <div className="fd-home-our-bg">
          <div className="fd-home-our-content">
            <CardGroup>
              <Card>
                <Card.Body>
                    <Card.Title className="fd-home-our-card-header ft-w1140-section-fs40"><FormattedMessage id="fd_home_our_header"/></Card.Title>
                    <Card.Text className="fd-home-our-card-header-text ft-w1140-section-fs16">
                      <FormattedMessage id="fd_home_our_text"/> 
                    </Card.Text>
                </Card.Body>
                <CardDeck>
                    <Card className="col-sm-6">
                        <Card.Body>
                            <img className="fd-home-our-card-img" src={require('../../assets/imgs/icon/delivery-on-time@2x.png')}
                              // width="59px"
                              // height="56px"
                              width="95px"
                              height="90px"
                              alt="delivery on time"/>
                            <Card.Title className="fd-home-our-card-title ft-w1140-smtext-fs18"><FormattedMessage id="fd_home_our_header1"/></Card.Title>
                            <Card.Text className="ft-w1140-text-fs14">
                              <FormattedMessage id="fd_home_our_text1"/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                    <Card.Body>
                            <img className="fd-home-our-card-img" src={require('../../assets/imgs/icon/delivery-smarter@2x.png')}
                              // width="61px"
                              // height="58px"
                              width="95px"
                              height="90px"
                              alt="delivery smarter"/>
                            <Card.Title className="fd-home-our-card-title ft-w1140-smtext-fs18"><FormattedMessage id="fd_home_our_header2"/></Card.Title>
                            <Card.Text className="ft-w1140-text-fs14">
                              <FormattedMessage id="fd_home_our_text2"/> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                        <Card.Body>
                          <img className="fd-home-our-card-img" src={require('../../assets/imgs/icon/delivery-gain-time@2x.png')}
                              // width="59px"
                              // height="56px"
                              width="95px"
                              height="90px"
                              alt="gain time"/>
                            <Card.Title className="fd-home-our-card-title ft-w1140-smtext-fs18"><FormattedMessage id="fd_home_our_header3"/></Card.Title>
                            <Card.Text className="ft-w1140-text-fs14">
                              <FormattedMessage id="fd_home_our_text3"/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
              </Card>
            </CardGroup>
          </div>
        </div>

        {/* download our app */}
        <div className="fd-home-our-app-bg">
          <div className="fd-home-our-app-content">
            <div className="fd-home-our-app-divl">
              <img className="fd-home-our-app-phone" src={require('../../assets/imgs/icon/delivery/delivery-home-ourapp.png')}
                  width="450px"
                  height="413px"
                  alt="mobile phone"/>
            </div>
            <div className="fd-home-our-app-divr">
              <div className="fd-home-our-app-download ft-w1140-section-fs40"><FormattedMessage id="fd_home_ourapp_header"/></div>
                <div className="fd-home-our-app-download-div ft-w1140-section-fs16"><FormattedMessage id="fd_home_ourapp_text1"/></div>
                <div className="fd-home-our-app-download-div ft-w1140-section-fs16"><FormattedMessage id="fd_home_ourapp_text2"/></div>
              <div className="fd-home-our-app-download-icon">
                <Navbar.Brand href="https://play.google.com/store/search?q=fantuan">
                  <img className="fd-home-our-app-google" src={require('../../assets/imgs/icon/delivery-google-play@2x.png')}
                    width="141px"
                    height="43px"
                    alt="google play"/>
                </Navbar.Brand>
                <Navbar.Brand href="https://apps.apple.com/ca/app/%E9%A5%AD%E5%9B%A2-%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%A4%96%E5%8D%96%E9%A4%90%E9%A5%AE%E5%93%81%E8%B4%A8%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0/id1218697769">
                  <img className="fd-home-our-app-appstore" src={require('../../assets/imgs/icon/delivery-app-store@2x.png')}
                    width="141px"
                    height="43px"
                    alt="app store"/>
                </Navbar.Brand>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="d-block w-100" src="/imgs/test/delivery-home.png" alt="for test only!"/> */}

        {/* with Fantuan */}
        <div className="fd-home-with-fantuan-bg">
          <div className="fd-home-with-fantuan-content">
            <CardDeck className="fd-home-with-fantuan-cards">
              <Card className="col-sm-6">
              <Card.Link className="fd-home-with-card-link" href="partner">
                <Card.Body className="fd-home-with-fantuan-card-body">
                {/* <Card.Link className="fd-home-with-card-link" href="partner"> */}
                  <div className="fd-home-with-card-content">
                  <img className="fd-home-with-card-img" src={require('../../assets/imgs/icon/delivery/delivery-home-partner.svg')}
                      width="65px"
                      height="56px"
                      alt="mobile phone"/>
                  <div className="fd-home-with-card-note">
                    <Card.Title className="fd-home-with-card-note-title ft-w1140-section-fs24"><FormattedMessage id="fd_home_with_header1"/></Card.Title>
                    <Card.Text className="fd-home-with-card-note-text ft-w1140-section-fs16">
                      <FormattedMessage id="fd_home_with_text1"/>
                    </Card.Text>
                    <img className="fd-home-with-card-link-img" src={require('../../assets/imgs/icon/delivery/delivery-home-arrow@2x.png')}
                        width="35px"
                        height="10px"
                        alt="mobile phone"/>
                  </div>
                  </div>
                  {/* </Card.Link> */}
                </Card.Body>
                </Card.Link>
              </Card>
              <Card className="col-sm-6">
              <Card.Link className="fd-home-with-card-link" href="deliver">
                <Card.Body className="fd-home-with-fantuan-card-body">
                {/* <Card.Link className="fd-home-with-card-link" href="deliver"> */}
                <div className="fd-home-with-card-content">
                  <img className="fd-home-with-card-img" src={require('../../assets/imgs/icon/delivery/delivery-home-drive.svg')}
                      width="65px"
                      height="56px"
                      alt="mobile phone"/>
                  <div className="fd-home-with-card-note">
                    <Card.Title className="fd-home-with-card-note-title ft-w1140-section-fs24"><FormattedMessage id="fd_home_with_header2"/></Card.Title>
                    <Card.Text className="fd-home-with-card-note-text ft-w1140-section-fs16">
                      <FormattedMessage id="fd_home_with_text2"/>
                    </Card.Text>
                    <img className="fd-home-with-card-link-img" src={require('../../assets/imgs/icon/delivery/delivery-home-arrow@2x.png')}
                        width="35px"
                        height="10px"
                        alt="mobile phone"/>
                  </div>
                  </div>
                  {/* </Card.Link> */}
                </Card.Body>
                </Card.Link>
              </Card>
            </CardDeck>
          </div>
        </div>

        <Footer/>
      </>
    );
  }
}

// export default DeliveryHome;
function mapStateToProps(state){
  return{
    lang: state.locale.lang
  };
}
export default connect(mapStateToProps)(DeliveryHome);
