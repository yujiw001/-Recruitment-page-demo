import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setLocale} from '../actions/locale';

import { FormattedMessage} from 'react-intl';

// import './Header.css';
import './Test15header.css'

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

  myFunction () {

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
    <div class="topnav" id="myTopnav">
        <a className="itema" href="#home" class="active">Home</a>
        <a className="itema" href="#news">News</a>
        <a className="itema" href="#contact">Contact</a>
        
        <a className="itema" href="#about">About</a>
        {/* <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a> */}
        {/* <a href="javascript:void(0);" style={{fontSize:'15px'}} class="icon" onclick="myFunction()">&#9776;</a> */}
        {/* <Nav.Link to="#" style={{fontSize:'15px'}} class="icon" onclick="myFunction()">&#9776;</Nav.Link> */}
        <button className="itema" style={{fontSize:'15px'}} class="icon" onclick="myFunction()">&#9776;</button>
    </div>

    <div style={{paddingLeft:'16px'}}>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
        <h2>Responsive Topnav with Dropdown</h2>
        <p>Resize the browser window to see how it works.</p>
        <p>Hover over the dropdown button to open the dropdown menu.</p>
    </div>

    </>
    );
  }
}
// export default Header;

Header.prototypes = {
    lang: PropTypes.string.isRequired
  }
  
function mapStateToProps(state){
  return{
    lang: state.locale.lang
  };
}
export default connect(mapStateToProps, {setLocale})(Header);

