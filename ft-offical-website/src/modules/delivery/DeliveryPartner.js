// =================================================================
// Program: DeliveryPartner.js - the partner page in the delivery 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
import AnimationCount from 'react-count-animation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BrainCarousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import {connect} from 'react-redux';
import { FormattedMessage} from 'react-intl';

import JoinUs from './JoinUs/paformmodal.component';
import ContactNow from './JoinUs/adformmodal.component';

import Header from './DeliveryHeader';
import Footer from './DeliveryFooter';

import './DeliveryPartner.count.min.css'
import './DeliveryPartner.css'

import PartnerComments from './data/DeliveryPartner.partner_comments';
import PartnerCommentsZh from './data/DeliveryPartner.partner_comments_zh';
import AdsShowData from './data/DeliveryPartner.ads_show_data';
import CountUpData from './data/DeliveryPartner.count_up_data';


class DeliveryPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callerName: 'partner',
      // carouselData: PartnerComments,
      partnerComments: PartnerComments,
      partnerCommentsZh: PartnerCommentsZh,
      adshowData: AdsShowData,
      settings: CountUpData,
      widthOfWin: window.innerWidth,
      heightOfWin: window.innerHeight
    };

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  handleMouseMove(e) {
    for ( let i=0; i < this.state.settings.length; i++) {
        const setting = this.state.settings[i];
        setting.start = setting.start + 1;
        const settings = this.state.settings;
        settings[i] = setting;
      }
      this.setState(this.state);
    }

  handleMouseEnter(e) {
    for ( let i=0; i < this.state.settings.length; i++) {
      const setting = this.state.settings[i];
      setting.start = setting.start + 1;
      const settings = this.state.settings;
      settings[i] = setting;
    }
    this.setState(this.state);
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

    const { settings } = this.state;

    const {lang} = this.props;
    let carouselData = this.props.lang === 'en' ? 
      this.state.partnerComments : this.state.partnerCommentsZh;

    return (
      <>
        <Header callerName={this.state.callerName}/>

        {/* partner with Fantuan */}
        <div className="fd-partner-with-bg">
          <div className="fd-partner-with-content">
              <h1 className="ft-w1140-section-fs60 fd-partner-with-h1"><FormattedMessage id="fd_partner_with_header"/></h1>
              <p className="fd-partner-with-p ft-w1140-text-fs18">
                <div className="test-color">
                <FormattedMessage id="fd_partner_with_text"/></div>
              </p>
              <p className="fd-partner-with-button">
                {/* <Button variant="dark" href="link-1">
                    <img className="fd-partner-with-button-img" src={require('../../assets/imgs/icon/delivery-deliver-document@2x.png')}
                    width="21px"
                    height="21px"
                    alt="Join Now"/>
                    Join Now
                </Button> */}
                <JoinUs className="fd-partner-with-button"/>
              </p>
          </div>
        </div>

        {/* more customers */}
        <div className="fd-partner-more-bg">
          <div className="fd-partner-more-content">
            <CardGroup>
              <CardDeck>
                <Card className="col-sm-6">
                  <Card.Body className="fd-partner-more-card-body">
                    <img className="fd-partner-more-card-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-more-customer@2x.png')}
                      width="61px"
                      height="58px"
                      alt="delivery on time"/>
                    <div className="fd-partner-more-card-note">
                      <Card.Title className="fd-partner-more-card-title"><FormattedMessage id="fd_partner_more_title1"/></Card.Title>
                      <Card.Text>
                        <FormattedMessage id="fd_partner_more_text1"/>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="col-sm-6">
                <Card.Body className="fd-partner-more-card-body">
                    <img className="fd-partner-more-card-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-nocosts@2x.png')}
                      width="61px"
                      height="58px"
                      alt="delivery smarter"/>
                    <div className="fd-partner-more-card-note">
                      <Card.Title className="fd-partner-more-card-title"><FormattedMessage id="fd_partner_more_title2"/></Card.Title>
                      <Card.Text>
                        <FormattedMessage id="fd_partner_more_text2"/>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
              <CardDeck>
                <Card className="col-sm-6">
                  <Card.Body className="fd-partner-more-card-body">
                    <img className="fd-partner-more-card-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-improve@2x.png')}
                      width="61px"
                      height="58px"
                      alt="delivery on time"/>
                    <div className="fd-partner-more-card-note">
                      <Card.Title className="fd-partner-more-card-title"><FormattedMessage id="fd_partner_more_title3"/></Card.Title>
                      <Card.Text>
                        <FormattedMessage id="fd_partner_more_text3"/>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="col-sm-6">
                <Card.Body className="fd-partner-more-card-body">
                    <img className="fd-partner-more-card-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-assist@2x.png')}
                      width="61px"
                      height="58px"
                      alt="delivery smarter"/>
                    <div className="fd-partner-more-card-note">
                      <Card.Title className="fd-partner-more-card-title"><FormattedMessage id="fd_partner_more_title4"/></Card.Title>
                      <Card.Text>
                        <FormattedMessage id="fd_partner_more_text4"/>
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
            </CardGroup>
          </div>
        </div>

        {/* count up ??? */}
        <div className="fd-partner-countup-bg">
          <div className="fd-partner-countup-content">
            <div className="fd-partner-countup" onMouseMove={this.handleMouseEnter} >
              <div className="fd-partner-countup-box">
                <div className="exam-div">
                  <AnimationCount {...settings[0]}/>
                  <h5 className="fd-partner-countup-title"><FormattedMessage id="fd_partner_countup_title1"/></h5>
                  {/* <p className="fd-partner-countup-p"><FormattedMessage id="fd_partner_countup_text1"/></p> */}
                </div>
              </div>
              <div className="fd-partner-countup-box">
                <div className="exam-div">
                  <AnimationCount {...settings[1]}/>
                <h5 className="fd-partner-countup-title"><FormattedMessage id="fd_partner_countup_title2"/></h5>
                {/* <p className="fd-partner-countup-p"><FormattedMessage id="fd_partner_countup_text2"/></p> */}
                </div>
              </div>
              <div className="fd-partner-countup-box">
                <div className="exam-div">
                  <AnimationCount {...settings[2]}/>
                <h5 className="fd-partner-countup-title"><FormattedMessage id="fd_partner_countup_title3"/></h5>
                {/* <p className="fd-partner-countup-p"><FormattedMessage id="fd_partner_countup_text3"/></p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* partner comment slides */}
        <div className="fd-partner-comment-bg">
          <div className="fd-partner-comment-content">
          { this.state.widthOfWin >= 570 ?
            <Carousel className="fd-partner-comment" interval="1500" controls="false" indicators="true" prevLabel="" nextLabel="" pauseOnHover="true" fade="true">
              {carouselData.map((ft,index) =>
              <Carousel.Item key={index}>
                <Container fluid="true" className="fd-partner-comment-con">
                  <Row noGutters="true">
                    <Col>
                      <div className="fd-partner-comment-card-caption">
                        <p className="fd-partner-comment-card-quotation">&ldquo;</p>
                        <p className="fd-partner-comment-card-note">{ft.slideCaption}</p>
                      </div>
                      <div className="fd-partner-comment-card-title">{ft.slideTitle}</div>
                    </Col>
                    <Col>
                      <img className="fd-partner-comment-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              )}
            </Carousel>
            :
            <Carousel className="fd-partner-comment" interval="1500" controls="true" indicators="false" pauseOnHover="true" fade="true">
              {carouselData.map((ft,index) =>
              <Carousel.Item key={index}>
                <Container fluid="true" className="fd-partner-comment-con">
                  <Row>
                    <Col>
                      <img className="fd-partner-comment-card-imgs" src={ft.imgSrc} alt={ft.slideTitle}/>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="fd-partner-comment-card-caption">
                        <p className="fd-partner-comment-card-quotation">&ldquo;</p>
                        <p className="fd-partner-comment-card-note">{ft.slideCaption}</p>
                      </div>
                      <div className="fd-partner-comment-card-title">{ft.slideTitle}</div>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              )}
            </Carousel>
          }
          </div>
        </div>

        {/* 4 simple steps */}
        <div className="fd-partner-4steps-bg">
          <div className="fd-partner-4steps-content">
            <CardGroup>
              <Card className="col-auto cardColAuto">
              <Card.Body>
                <Card.Title className="text-center fd-partner-4steps-title"><FormattedMessage id="fd_partner_4steps_title"/></Card.Title>
                <Card.Text className="fd-partner-4steps-text">
                  <FormattedMessage id="fd_partner_4steps_text"/>
                </Card.Text>
              </Card.Body>
              <CardDeck className="row cardDeckRow">
                <Card className="col-sm-6">
                  <Card.Body>
                    <img className="fd-partner-4steps-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 1"/>
                    <Card.Title className="text-center fd-partner-4steps-subtitle"><FormattedMessage id="fd_partner_4steps_title1"/></Card.Title>
                    <Card.Text className="fd-partner-4steps-text">
                      <FormattedMessage id="fd_partner_4steps_text1"/>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-sm-6">
                <Card.Body>
                <img className="fd-partner-4steps-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 2"/>
                  <Card.Title className="text-center fd-partner-4steps-subtitle"><FormattedMessage id="fd_partner_4steps_title2"/></Card.Title>
                  <Card.Text className="fd-partner-4steps-text">
                    <FormattedMessage id="fd_partner_4steps_text2"/>
                  </Card.Text>
                </Card.Body>
                </Card>
                <Card className="col-sm-6">
                  <Card.Body>
                  <img className="fd-partner-4steps-img" src={require('../../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 3"/>
                    <Card.Title className="text-center fd-partner-4steps-subtitle"><FormattedMessage id="fd_partner_4steps_title3"/></Card.Title>
                    <Card.Text className="fd-partner-4steps-text">
                      <FormattedMessage id="fd_partner_4steps_text3"/>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="col-sm-6">
                <Card.Body>
                <img className="fd-partner-4steps-img fd-partner-4steps-img-4" src={require('../../assets/imgs/icon/delivery/delivery-partner-4steps@2x.png')}
                          width="61px"
                          height="58px"
                          alt="delivery partner step 4"/>
                  <Card.Title className="text-center fd-partner-4steps-subtitle"><FormattedMessage id="fd_partner_4steps_title4"/></Card.Title>
                  <Card.Text className="fd-partner-4steps-text">
                    <FormattedMessage id="fd_partner_4steps_text4"/>
                  </Card.Text>
                </Card.Body>
                </Card>
              </CardDeck>
              </Card>
            </CardGroup>
            <h1 className="fd-partner-4step-getstart"><FormattedMessage id="fd_partner_4steps_start"/></h1>
            <div className="fd-partner-4step-button">
                {/* <Button className="fd-partner-4step-join" href="link-1">
                    <img className="fd-partner-with-button-img" src={require('../../assets/imgs/icon/delivery-deliver-document@2x.png')}
                    width="21px"
                    height="21px"
                    alt="Join Now"/>
                    Join Now
                </Button> */}
                <JoinUs className="fd-partner-with-button"/>
            </div>
          </div>
        </div>

        {/* advertising */}
        <div className="fd-partner-advert-bg">
          <div className="fd-partner-advert-content">
              <Card className="col-auto">
                <Card.Body className="fd-partner-advert-card">
                  <h5 className="text-center fd-partner-advert-title"><FormattedMessage id="fd_partner_advert_title"/></h5>
                  <p className="fd-partner-advert-text">
                    <FormattedMessage id="fd_partner_advert_text"/>
                  </p>
                  <div className="fd-partner-advert-buttons">
                    <p className="fd-partner-advert-button">
                      {/* <Button className="fd-partner-advert-contact" href="link-1">
                          <img className="fd-partner-advert-button-img" src={require('../../assets/imgs/icon/delivery-deliver-document@2x.png')}
                          width="16px"
                          height="16px"
                          alt="Join Now"/>
                          Contact Now
                      </Button> */}
                      <ContactNow/>
                    </p>
                    <p className="fd-partner-advert-button">
                      <Button className="fd-partner-advert-media" href="link-1">
                          <img className="fd-partner-advert-button-img" src={require('../../assets/imgs/icon/delivery-deliver-document@2x.png')}
                          width="16px"
                          height="16px"
                          alt="Join Now"/>
                          Media Kit
                      </Button>
                    </p>
                  </div>
                </Card.Body>
              </Card>
          </div>
        </div>

        {/* partner advertising shown */}
        <div className="fd-partner-adshow-bg">
          <div className="fd-partner-adshow-content">
          <BrainCarousel
              slidesPerPage={4}
              slidesPerScroll={1}
              itemWidth={50}
              offset={260}
              autoPlay={2000}
              animationSpeed={1000}
              // centered
              infinite
              breakpoints={{
                992: { // these props will be applied when screen width is less than 992px
                  slidesPerPage: 3,
                  slidesPerScroll: 1,
                  offset: 200,
                },
                500: {
                  slidesPerPage: 1,
                  slidesPerScroll: 1,
                  // clickToChange: false,
                  // centered: false,
                  // arrowLeft: (<Icon className="icon-example" name="arrow-left" />),
                  // arrowRight: (<Icon className="icon-example" name="arrow-right" />),
                  // animationSpeed: 2000,
                  infinite: false,
                  offset: 120,
                },
              }}
            >
            {this.state.adshowData.map((ft,index) =>
              <div key={index}>
              <img className="fd-partner-adshow-imgs" src={ft.imgSrc}
                width="130px"
                height="auto"
                alt={ft.slideTitle}/>
              </div>
            )}
          </BrainCarousel>
          </div>
        </div>

        <Footer/>
      </>
    );
  }
}

function mapStateToProps(state){
  return{
    lang: state.locale.lang
  };
}
export default connect(mapStateToProps)(DeliveryPartner);
