// =================================================================
// Program: DeliveryFooter.js - the footer of the delivery
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { FormattedMessage} from 'react-intl';

import './DeliveryFooter.css';

class Footer extends Component {
    render() {
        return (
        <>  
        <div className="fd-footer-bg">
            <div className="fd-footer-content">

               <div className="fd-footer-group-1">
                    <div className="fd-footer-1 fd-footer-1to4">
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="link-1"><FormattedMessage id="fd_footer_dianping"/></Nav.Link>
                    </div>
                    <div className="fd-footer-2 fd-footer-1to4">
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/about"><FormattedMessage id="fd_footer_aboutus"/></Nav.Link>
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/news"><FormattedMessage id="fd_footer_newsroom"/></Nav.Link>
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/career"><FormattedMessage id="fd_footer_career"/></Nav.Link>
                    </div>
                    <div className="fd-footer-3 fd-footer-1to4">
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/about#contactusid"><FormattedMessage id="fd_footer_contactus"/></Nav.Link>
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/faq"><FormattedMessage id="fd_footer_faq"/></Nav.Link>
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="link-1"><FormattedMessage id="fd_footer_policy"/></Nav.Link>
                    </div>
                    <div className="fd-footer-4 fd-footer-1to4">
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/partner"><FormattedMessage id="fd_footer_partner"/></Nav.Link>
                        <Nav.Link className="fd-footer-links ft-w1140-button-fs16" href="/deliver"><FormattedMessage id="fd_footer_driver"/></Nav.Link>
                    </div>
                    <div className="fd-footer-5">
                        <div className="fd-footer-5-div-1">
                            <div className="ft-w1140-button-fs16 fd-footer-5-media"><FormattedMessage id="fd_footer_suggest"/></div>
                            <div className="ft-w1140-button-fs16 fd-footer-5-email">feedback@fantuan.ca</div>
                        </div>
                        <div className="fd-footer-5-div-2">
                            <Navbar className="fd-footer-5-google">
                                <Navbar.Brand href="https://play.google.com/store/search?q=fantuan">
                                <img src={require('../../assets/imgs/icon/GooglePlay2@2x.png')}
                                 width="138px"
                                 height="38px"
                                 className="d-inline-block align-top"
                                 alt="Google Play"/>
                                </Navbar.Brand>
                            </Navbar>
                            <Navbar className="fd-footer-5-appstore">
                                <Navbar.Brand href="https://apps.apple.com/ca/app/%E9%A5%AD%E5%9B%A2-%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%A4%96%E5%8D%96%E9%A4%90%E9%A5%AE%E5%93%81%E8%B4%A8%E6%9C%8D%E5%8A%A1%E5%B9%B3%E5%8F%B0/id1218697769">
                                <img src={require('../../assets/imgs/icon/AppStore@2x.png')}
                                    width="138px"
                                    height="38px"
                                    className="d-inline-block align-top"
                                    alt="App Store"/>
                                </Navbar.Brand>
                            </Navbar>
                        </div>
                    </div>
                </div>

                {/* Footer line */}
                <hr className="fd-footer-hr" />

                {/* Footer group 2 */}
                <div className="fd-footer-group-2">
                    <div className="fd-footer-6">
                        <Navbar className="fd-footer-6-delivery">
                            <Navbar.Brand href="delivery">
                            <img
                                src={require('../../assets/imgs/icon/AntuanDelivery48@2x.png')}
                                width="113px"
                                height="28px"
                                className="d-inline-block align-top"
                                alt="Antuan Delivery"
                            />
                            </Navbar.Brand>
                        </Navbar>
                    </div>
                    <div className="fd-footer-7">
                        <p className="t-w1140-smtext-fs14 fd-footer-7-fantuan">© 2019 Fantuan Technologies</p>
                    </div>
                    <div className="fd-footer-8">
                        <Navbar className="fd-footer-8-facebook">
                            <Navbar.Brand href="#fackbook">
                            <img
                                src={require('../../assets/imgs/icon/svg/Facebook3@2x.svg')}
                                width="25px"
                                height="25px"
                                className="d-inline-block align-top"
                                alt="Facebook"
                            />
                            </Navbar.Brand>
                        </Navbar>
                        <Navbar className="fd-footer-8-youtube">
                            <Navbar.Brand href="#youtube">
                            <img
                                src={require('../../assets/imgs/icon/svg/Youtube3@2x.svg')}
                                width="25px"
                                height="25px"
                                className="d-inline-block align-top"
                                alt="Youtube"
                            />
                            </Navbar.Brand>
                        </Navbar>
                        <Navbar className="fd-footer-8-linkedin">
                            <Navbar.Brand href="#Linkedin">
                            <img
                                src={require('../../assets/imgs/icon/svg/Linkedin7@2x.svg')}
                                width="25px"
                                height="25px"
                                className="d-inline-block align-top"
                                alt="Linkedin"
                            />
                            </Navbar.Brand>
                        </Navbar>
                        <Navbar className="fd-footer-8-instagram">
                            <Navbar.Brand href="#Instagram">
                            <img
                                src={require('../../assets/imgs/icon/svg/Instagram3@2x.svg')}
                                width="25px"
                                height="25px"
                                className="d-inline-block align-top"
                                alt="Instagram"
                            />
                            </Navbar.Brand>
                        </Navbar>
                    </div>
                </div>

            </div>
            </div>
        </>
        );
    }
}

export default Footer;
