// =================================================================
// Program: Header - the header of the office website
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import {connect} from 'react-redux';
import {setLocale} from '../../actions/locale';

import languageSwitchIcon from '../../assets/imgs/icon/language-switch-icon@2x.png';
import { FormattedMessage} from 'react-intl';

import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widthOfWin: window.innerWidth,
      heightOfWin: window.innerHeight,
      heightToTop: window.scrollY,
      opacityVar: 1,
    };
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
    const fadeHeitht = 300;
    this.setState({heightToTop: window.scrollY});
    if (this.state.heightToTop > 0 && this.state.heightToTop <= fadeHeitht) {
      this.setState({opacityVar: 1 - (1/fadeHeitht) * this.state.heightToTop});
    } else 
      this.setState({opacityVar: 1});
  }  
  
  updateWindowDimensions() {
    this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
  }

  switchLocale = () => {
    this.props.lang === 'en' ?
      this.props.setLocale('zh'):this.props.setLocale('en');
  }

  render() {

    const {lang} = this.props;

    // set the default background color for header
    let fdHeaderBg = ('ft-header-bg-home');
    let fdHeaderContent = ('ft-header-content-home');
    let navBackgroundColor = ('#062236');
    let navLinkStyle = {color: 'black', };

    switch(this.props.callerName){
      // case 'fantuan':
      //   fdHeaderBg = ('ft-header-bg-fantuan');
      //   fdHeaderContent = ('ft-header-content-fantuan');
      //   if (this.state.heightToTop >= 200)
      //   {
      //     navBackgroundColor = ('#062236'); // black
      //     navLinkStyle = {color: 'white'};
      //   } else {
      //     navBackgroundColor = (''); 
      //     navLinkStyle = {color: '#062236'};
      //   }      
      //   break;

      case 'about':
        fdHeaderBg = ('ft-header-bg-about');
        fdHeaderContent = ('ft-header-content-about');
        if (this.state.heightToTop >= 200)
        {
          navBackgroundColor = ('#062236'); // black
          navLinkStyle = {color: 'white'};
        } else {
          navBackgroundColor = (''); 
          navLinkStyle = {color: '#062236'};
        }      
        break;
  
      case 'about1':
        fdHeaderBg = ('ft-header-bg-about1');
        fdHeaderContent = ('ft-header-content-about1');
        navBackgroundColor = ('#062236');
        navLinkStyle = {color: 'white', };
        break;
  
      case 'news':
      fdHeaderBg = ('ft-header-bg-news');
      fdHeaderContent = ('ft-header-content-news');
      navBackgroundColor = ('#062236');
      navLinkStyle = {color: 'white', };
      break;

      case 'career':
        fdHeaderBg = ('ft-header-bg-career');
        fdHeaderContent = ('ft-header-content-career');
        navBackgroundColor = ('#062236');
        navLinkStyle = {color: 'white', };
        break;

      // for /news/details/? and /career/details/?
      default:
        fdHeaderBg = ('ft-header-bg-default');
        fdHeaderContent = ('ft-header-content-default');
        navBackgroundColor = ('#062236');
        navLinkStyle = {color: 'white', };
  
    }

    // set opacity of header
    let navBarStyle = {
      opacity: this.state.opacityVar,
      backgroundColor: this.state.navBackgroundColor,
    };

    return (
      <>
        <Navbar className={fdHeaderBg} style={navBarStyle} collapseOnSelect expand="sm" sticky="top">
          <div className={fdHeaderContent}>
          <Navbar.Brand style={navLinkStyle} href="/about">
            <FormattedMessage id="ft_header_fantuan"/>
          </Navbar.Brand>
          <Navbar.Toggle className="ft-header-toggle" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <div className="ft-header-nav">
                  <div className="ft-header-nav-left">
                    <Nav.Link style={navLinkStyle} href="/about#aboutid">
                      <FormattedMessage id="ft_header_about"/>
                    </Nav.Link>
                    <Nav.Link style={navLinkStyle} href="/news">
                      <FormattedMessage id="ft_header_newsroom"/>
                    </Nav.Link>
                    <Nav.Link style={navLinkStyle} href="/career">
                      <FormattedMessage id="ft_header_career"/>
                    </Nav.Link>
                  </div>
                  <div className="ft-header-nav-right">
                    <Nav.Link style={navLinkStyle} href="###" onClick={this.switchLocale}>
                      <img className="ft-header-language-icon" src={languageSwitchIcon}
                        width="18px"
                        height="18px"
                        alt="language switch"/>
                      <FormattedMessage id="ft_header_language"/>
                    </Nav.Link>
                    <Nav.Link className="navLink" href="/test">Test</Nav.Link>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

      </>
    );
  }
}
// export default Header;

function mapStateToProps(state){
  return{
    lang: state.locale.lang
  };
}
export default connect(mapStateToProps, {setLocale})(Header);

