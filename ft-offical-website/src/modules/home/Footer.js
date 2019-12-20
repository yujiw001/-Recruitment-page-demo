// =================================================================
// Program: Footer.js - the footer of the office website
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FormattedMessage} from 'react-intl';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <>
            <div className="ft-footer-bg">
            <div className="ft-footer-content">

               <div className="ft-footer-group-1">
                    <div className="ft-footer-1 ft-footer-1to4">
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="delivery"><FormattedMessage id="ft_footer_ftdelivery"/></Nav.Link>
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="dianping"><FormattedMessage id="ft_footer_ftdianping"/></Nav.Link>
                    </div>
                    <div className="ft-footer-2 ft-footer-1to4">
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="/about"><FormattedMessage id="ft_footer_aboutus"/></Nav.Link>
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="/news"><FormattedMessage id="ft_footer_newsroom"/></Nav.Link>
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="/career"><FormattedMessage id="ft_footer_careers"/></Nav.Link>
                    </div>
                    <div className="ft-footer-3 ft-footer-1to4">
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="/about#contactusid"><FormattedMessage id="ft_footer_contactus"/></Nav.Link>
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="link-1"><FormattedMessage id="ft_footer_policy"/></Nav.Link>
                    </div>
                    <div className="ft-footer-4 ft-footer-1to4">
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="/partner"><FormattedMessage id="ft_footer_partner"/></Nav.Link>
                        <Nav.Link className="ft-footer-links ft-w1140-button-fs16" href="/deliver"><FormattedMessage id="ft_footer_driver"/></Nav.Link>
                    </div>
                    <div className="ft-footer-5">
                        <div className="ft-footer-5-div-1">
                            <div className="ft-w1140-button-fs16 ft-footer-5-media"><FormattedMessage id="ft_footer_suggest"/></div>
                            <div className="ft-w1140-button-fs16 ft-footer-5-email">feedback@fantuan.ca</div>
                        </div>
                        <div className="ft-footer-5-div-2">
                            <div className="ft-footer-7">
                                <p className="ft-w1140-smtext-fs14 ft-footer-7-fantuan">© 2019 Fantuan Technologies</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </>
        );
    }
}

export default Footer;
