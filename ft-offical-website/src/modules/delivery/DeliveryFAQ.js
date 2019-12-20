// =================================================================
// Program: DeliveryFAQ.js - the webpage of the FAQ of the delivery
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import PropTypes from "prop-types";
import { Collapse, Icon } from 'antd';
import 'antd/dist/antd.css';
import Slider from "react-slick"; 
import { injectIntl, FormattedMessage} from 'react-intl';

import Header from './DeliveryHeader';
import Footer from './DeliveryFooter';

import './DeliveryFAQ.css';
// import { whileStatement } from '@babel/types';

const { Panel } = Collapse;

class DeliveryFAQ extends Component {
  constructor() {
    super()
    this.state = {
      callerName: 'faq',
      changeColor: false,
    };
    this.callback = this.callback.bind(this)
  }

  callback() {
    this.setState({
      changeColor: !this.state.changeColor,
    })
  }

  render() {

    // let styleObj ={
    //   // background: '#ccc',
    //   border: 'none',
    //   // border-top: 'solid 1px #ccc',
    //   background: this.state.changeColor ? '#ccc' : 'white',
    // }
    // const customPanelStyle = {
    //   background: '#f7f7f7',
    //   // borderRadius: 4,
    //   // marginBottom: 24,
    //   border: 0,
    //   overflow: 'hidden',
    //     };

    // const settings = {
    //   dots: true,
    //   // dotPosition: top,
    //   infinite: true,
    //   slidesToShow: 2,
    //   slidesToScroll: 2,
    //   autoplay: true,
    //   // speed: 7000,
    //   autoplaySpeed: 2000,
    //   pauseOnHover: true,
    //   adaptiveHeight: false
    //     };
    
    return (
      <>
        {/* <Header/> */}
        <Header callerName={this.state.callerName}/>

        <div className="fd-faq-faq-bg">
          <div className="fd-faq-faq-content">
            <h1 className="fd-faq-faq-header"><FormattedMessage id="fd_faq_header"/></h1>
            <p className="fd-faq-faq-header-note">
              <FormattedMessage id="fd_faq_text"/>
            </p>
          </div>
        </div>

        {/* General FAQ */}
        <div className="fd-faq-general-bg">
          <div className="fd-faq-general-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_general_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_general_h1"/>} key="1">
              <p><FormattedMessage id="fd_faq_general_p1"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_general_h2"/>} key="2">
              <p><FormattedMessage id="fd_faq_general_p2"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_general_h3"/>} key="3">
              <p><FormattedMessage id="fd_faq_general_p3"/></p>
              <p><FormattedMessage id="fd_faq_general_p31"/></p>
              <p><FormattedMessage id="fd_faq_general_p32"/></p>
              <p><FormattedMessage id="fd_faq_general_p33"/></p>
              <p><FormattedMessage id="fd_faq_general_p34"/></p>
              <p><FormattedMessage id="fd_faq_general_p35"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_general_h4"/>} key="4">
              <p><FormattedMessage id="fd_faq_general_p4"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_general_h5"/>} key="5">
              <p><FormattedMessage id="fd_faq_general_p5"/></p>
            </Panel>
          </Collapse>
          </div>
        </div>

        {/* Account FAQ */}
        {/* <div className="fd-faq-account-bg">
          <div className="fd-faq-account-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_account_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header="Making your life easier is our top priority." key="1">
              <p>Hello! I'm the body</p>
            </Panel>
            <Panel className="fd-faq-toggle" header="Fantuan delivery was founded in Vancouver, Canada in 2014. With a mission of …" key="2">
              <p>Hello! I'm another body</p>
            </Panel>
            <Panel className="fd-faq-toggle" header="Making your life easier is our top priority." key="3">
              <p>Hello! I'm another body</p>
            </Panel>
            <Panel className="fd-faq-toggle" header="Making your life easier is our top priority." key="4">
              <p>Hello! I'm another body</p>
            </Panel>
            <Panel className="fd-faq-toggle" header="Businesses can pick up the tab for riders with Uber Vouchers" key="5">
              <p>Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                  Besides food delivery service, our businesses include advertising and promotion, online mart, self-pickup and other services. In 2019, Fantuan will expand to Calgary, Montreal, Waterloo, Mississauga and Seattle.Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. Besides food delivery service, our businesses include advertising and promotion, online mart, self-pickup and other services. In 2019, Fantuan will expand to Calgary, Montreal, Waterloo, Mississauga and Seattle.</p>
            </Panel>
            <Panel className="fd-faq-toggle" header="Making your life easier is our top priority." key="6">
              <p>Hello! I'm another body</p>
            </Panel>
          </Collapse>
          </div>
        </div> */}

        {/* Deliver FAQ */}
        <div className="fd-faq-deliver-bg">
          <div className="fd-faq-deliver-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_deliver_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_deliver_h1"/>} key="1">
              <p><FormattedMessage id="fd_faq_deliver_p1"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_deliver_h2"/>} key="2">
              <p><FormattedMessage id="fd_faq_deliver_p2"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_deliver_h3"/>} key="3">
              <p><FormattedMessage id="fd_faq_deliver_p3"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_deliver_h4"/>} key="4">
              <p><FormattedMessage id="fd_faq_deliver_p4"/></p>
            </Panel>
          </Collapse>
          </div>
        </div>

        {/* Refunds FAQ */}
        <div className="fd-faq-refunds-bg">
          <div className="fd-faq-refunds-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_refunds_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_refunds_h1"/>} key="1">
              <p><FormattedMessage id="fd_faq_refunds_p1"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_refunds_h2"/>} key="2">
              <p><FormattedMessage id="fd_faq_refunds_p2"/></p>
            </Panel>
          </Collapse>
          </div>
        </div>

        {/* Partners FAQ */}
        <div className="fd-faq-partners-bg">
          <div className="fd-faq-partners-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_partner_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_partner_h1"/>} key="1">
              <p><FormattedMessage id="fd_faq_partner_p1"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_partner_h2"/>} key="2">
              <p><FormattedMessage id="fd_faq_partner_p2"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_partner_h3"/>} key="3">
              <p><FormattedMessage id="fd_faq_partner_p3"/></p>
            </Panel>
          </Collapse>
          </div>
        </div>

        {/* Payment FAQ */}
        <div className="fd-faq-payment-bg">
          <div className="fd-faq-payment-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_payment_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_payment_h1"/>} key="1">
              <p><FormattedMessage id="fd_faq_payment_p1"/></p>
              <p><FormattedMessage id="fd_faq_payment_p11"/></p>
              <p><FormattedMessage id="fd_faq_payment_p12"/></p>
              <p><FormattedMessage id="fd_faq_payment_p13"/></p>
              <p><FormattedMessage id="fd_faq_payment_p14"/></p>
              <p><FormattedMessage id="fd_faq_payment_p15"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_payment_h2"/>} key="2">
              <p><FormattedMessage id="fd_faq_payment_p2"/></p>
            </Panel>
          </Collapse>
          </div>
        </div>

        {/* Member FAQ */}
        <div className="fd-faq-member-bg">
          <div className="fd-faq-member-content">
          <h4 className="fd-faq-header"><FormattedMessage id="fd_faq_member_title"/></h4>
          <Collapse className="fd-faq-collaps" bordered={false} onChange={this.callback} expandIconPosition={'right'} expandIcon={({ isActive }) => <Icon type={isActive ? "up" : "down"}/>} >
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_member_h1"/>} key="1">
              <p><FormattedMessage id="fd_faq_member_p1"/></p>
              <p><FormattedMessage id="fd_faq_member_p11"/></p>
              <p><FormattedMessage id="fd_faq_member_p12"/></p>
            </Panel>
            <Panel className="fd-faq-toggle" header={<FormattedMessage id="fd_faq_member_h2"/>} key="2">
              <p><FormattedMessage id="fd_faq_member_p2"/></p>
            </Panel>
          </Collapse>
          </div>
        </div>

        <Footer/>
      </>
    );
  }
}

export default DeliveryFAQ;
