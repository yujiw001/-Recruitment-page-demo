// =================================================================
// Program: DeliveryDeliver.js - the webpage of the deliver of the 
//          delivery
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component, Fragment } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick"; 
// import BrainCarousel, { Dots } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import {connect} from 'react-redux';
import { FormattedMessage} from 'react-intl';

import JoinUs from './JoinUs/JoinUsModal.component';

import Header from './DeliveryHeader';
import Footer from './DeliveryFooter';

import DeliverComments from './data/DeliveryDeliver.deliver_comments';
import DeliverCommentsZh from './data/DeliveryDeliver.deliver_comments_zh';

import './DeliveryDeliver.css'

class DeliveryDeliver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callerName: 'deliver',
      valueOfDots: 0,
      deliverComments: DeliverComments,
      deliverCommentsZh: DeliverCommentsZh,
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
      }]
    };
  }

  render() {

    // https://react-slick.neostack.com/docs/example/simple-slider
    const settings = {
      dots: true,
      // dotPosition: top,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      // speed: 7000,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      adaptiveHeight: false
    };

    const {lang} = this.props;
    let carouselData = this.props.lang === 'en' ? 
      this.state.deliverComments : this.state.deliverCommentsZh;


    return (
      <>
        {/* <Header/> */}
        <Header callerName={this.state.callerName}/>

        {/* flexible hours */}
        <div className="fd-deliver-flexible-bg">
          <div className="fd-deliver-flexible-content">
              <h1 className="fd-deliver-flexible-h1 fd-deliver-flexible-top"><FormattedMessage id="fd_deliver_flexible_p1"/></h1>
              <h1 className="fd-deliver-flexible-h1"><FormattedMessage id="fd_deliver_flexible_p2"/></h1>
              <div className="fd-deliver-flexible-earn200">
                <p className="fd-deliver-flexible-p">
                  <FormattedMessage id="fd_deliver_flexible_p3"/>
                </p>
              </div>
              <p className="fd-deliver-flexible-button">
                {/* <Button variant="dark" href="link-1">
                    <img className="fd-deliver-flexible-button-img" src={require('../../assets/imgs/icon/delivery-deliver-document@2x.png')}
                    width="16px"
                    height="16px"
                    alt="Join Now"/>
                    Apply Now
                </Button> */}
                <JoinUs/>
              </p>
          </div>
        </div>

        {/* why deliver with Fantuan */}
        <div className="fd-deliver-why-bg">
          <div className="fd-deliver-why-content">
            <CardGroup>
              <Card>
                <Card.Body>
                    <Card.Title className="fd-deliver-header"><FormattedMessage id="fd_deliver_why_header"/></Card.Title>
                    <Card.Text className="fd-deliver-header-text">
                      <FormattedMessage id="fd_deliver_why_text"/>
                    </Card.Text>
                </Card.Body>
                <CardDeck>
                    <Card className="col-sm-6">
                        <Card.Body>
                            <img className="fd-deliver-img" src={require('../../assets/imgs/icon/delivery-on-time@2x.png')}
                              width="59px"
                              height="56px"
                              alt="delivery on time"/>
                            <Card.Title className="fd-deliver-title"><FormattedMessage id="fd_deliver_why_header1"/></Card.Title>
                            <Card.Text className="fd-deliver-text">
                              <FormattedMessage id="fd_deliver_why_text1"/>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                    <Card.Body>
                            <img className="fd-deliver-img" src={require('../../assets/imgs/icon/delivery-partner-withft@2x.png')}
                              width="61px"
                              height="58px"
                              alt="delivery smarter"/>
                            <Card.Title className="fd-deliver-title"><FormattedMessage id="fd_deliver_why_header2"/></Card.Title>
                            <Card.Text className="fd-deliver-text">
                              <FormattedMessage id="fd_deliver_why_text2"/>  
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                        <Card.Body>
                          <img className="fd-deliver-img" src={require('../../assets/imgs/icon/delivery-partner-trans@2x.png')}
                              width="59px"
                              height="56px"
                              alt="gain time"/>
                            <Card.Title className="fd-deliver-title"><FormattedMessage id="fd_deliver_why_header3"/></Card.Title>
                            <Card.Text className="fd-deliver-text">
                              <FormattedMessage id="fd_deliver_why_text3"/> 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
              </Card>
            </CardGroup>
          </div>
        </div>

        {/* meet the people */}
        <div className="fd-deliver-meet-bg">
          <div className="fd-deliver-meet-content">
            <div className="fd-deliver-meet-header">
              <h3 className="fd-deliver-meet-h"><FormattedMessage id="fd_deliver_meet_header"/></h3>
              <p className="fd-deliver-meet-p"><FormattedMessage id="fd_deliver_meet_text"/></p>
            </div>
            <Slider className="fd-deliver-meet-slider" {...settings}>
            {carouselData.map((ft,index) => (
              <div className="fd-deliver-meet-card">
                <Card className="col-sm-6 fd-deliver-meet-card">
                <Card.Body className="fd-deliver-meet-card-body">
                  <p className="fd-deliver-meet-quotation">“</p>
                  <p className="fd-deliver-meet-comment">{ft.comment}</p> 
                  <div className="fd-deliver-meet-div">
                    <div className="fd-deliver-meet-div1"> 
                      <img className="fd-deliver-meet-img" src={ft.imgSrc} width="45px" height="45px" alt={ft.name}/> 
                    </div> 
                    <div className="fd-deliver-meet-div2"> 
                      <Card.Title className="fd-deliver-meet-div2-title">{ft.name}</Card.Title>
                      <Card.Text className="fd-deliver-meet-div2-text">{ft.year}</Card.Text> 
                    </div>
                  </div>
                </Card.Body>
                </Card>
              </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* get started */}
        <div className="fd-deliver-get-bg">
          <div className="fd-deliver-get-content">
          <div className="fd-deliver-get-text-button">
            <div className="fd-deliver-get-note">
              <h1 className="fd-deliver-get-h1"><FormattedMessage id="fd_deliver_get_header"/></h1>
              <p className="fd-deliver-get-p1">
                <FormattedMessage id="fd_deliver_get_text1"/>
              </p>
              <p className="fd-deliver-get-p2">
                <FormattedMessage id="fd_deliver_get_text2"/>
              </p>
            </div>
            <div className="fd-deliver-get-button">
              {/* <Button variant="dark" href="link-1">
                  <img className="fd-deliver-get-button-img" src={require('../../assets/imgs/icon/delivery-deliver-document@2x.png')}
                  width="16px"
                  height="16px"
                  alt="Join Now"/>
                  Join Now
              </Button> */}
              <JoinUs/>
            </div>
          </div>
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
export default connect(mapStateToProps)(DeliveryDeliver);
