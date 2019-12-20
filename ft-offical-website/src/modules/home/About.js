// =================================================================
// Program: About.js - the about page of the home in the office 
//          website
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

// system components
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
// import ScrollableAnchor,{goToAnchor} from 'react-scrollable-anchor';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// css put in index.html
import Slider from "react-slick"; 

import {connect} from 'react-redux';
import { FormattedMessage} from 'react-intl';

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
// import MapMatchWithContact from './data/About.data_of_map_contact';
import MapContactOfCanada from './data/About.data_of_map_contact_ca';
import MapContactOfCanadaZh from './data/About.data_of_map_contact_ca_zh';
import MapContactOfUsa from './data/About.data_of_map_contact_us';
import MapContactOfUsaZh from './data/About.data_of_map_contact_us_zh';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // className="slick-arrow slick-next"
        // className="slick-arrow"
        // style={{ ...style, display: "block", background: "red" }}
        style={{ ...style, display: "block", background: "#062236" }}
        onClick={onClick}
      >
        {/* <img src={require('../../assets/imgs/icon/ARROW-right.png')}
        width="15px"
        height="15px"
        alt="arrow_right"/> */}
      </div>
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className="slick-arrow slick-prev"
        className={className}
        style={{ ...style, display: "block", background: "#062236" }}
        onClick={onClick}
      >
        {/* <img src={require('../../assets/imgs/icon/ARROW-left.png')}
        width="15px"
        height="15px"
        alt="arrow_left"/> */}
      </div>
    );
  }

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            callerName: 'about',
            callerName1: 'about1',
            textcolor:'red',
            changeColor: false,
            indexMap: 1,
            companyHistoryData: CompanyHistoryData,
            // mapAdrs: MapMatchWithContact,
            // mapAdrsCa: MapContactOfCanada,
            // mapAdrsUs: MapContactOfUsa,
            mapContactOfCanada: MapContactOfCanada,
            mapContactOfCanadaZh: MapContactOfCanadaZh,
            mapContactOfUsa: MapContactOfUsa,
            mapContactOfUsaZh: MapContactOfUsaZh,

            // widthOfWin: window.innerWidth,
            // heightOfWin: window.innerHeight,
            heightToTop: window.scrollY,
            abouttop: 0,
            currentabouttop: 0,
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
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseMoveOnDelivery = this.handleMouseMoveOnDelivery.bind(this);
        this.handleMouseMoveOnDianping = this.handleMouseMoveOnDianping.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
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
          }, 6000);

        var getInnerInfo = this.refs.innerabout;
        var getInnerRect = getInnerInfo.getBoundingClientRect();
        this.setState({
            abouttop: getInnerRect.top,
        });
        
        // get the information of history elements
        var getInnerInfo = this.refs.inner0;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts0top: getInnerRect.top,
			ts0height: getInnerRect.height,
		});

        var getInnerInfo = this.refs.inner1;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts1top: getInnerRect.top,
		});

        var getInnerInfo = this.refs.inner2;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts2top: getInnerRect.top,
		});

        var getInnerInfo = this.refs.inner3;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts3top: getInnerRect.top,
		});

        var getInnerInfo = this.refs.inner4;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts4top: getInnerRect.top,
		});

        var getInnerInfo = this.refs.inner5;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts5top: getInnerRect.top,
		});

        var getInnerInfo = this.refs.inner6;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts6top: getInnerRect.top,
		});

        var getInnerInfo = this.refs.inner7;
		var getInnerRect = getInnerInfo.getBoundingClientRect();
		this.setState({
			ts7top: getInnerRect.top,
        });
    }
	
    componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
        window.removeEventListener('scroll', this.handleScroll);
    }
	
    handleScroll(event) {
        this.setState({heightToTop: window.scrollY});
    } 

    handleMouseMove(p, e) {
        // console.log("mouse move",p);
        var pstring = JSON.stringify(p).split(":")[1];
        var pv = Number(JSON.stringify(p).split(":")[1].substring(0,pstring.length-1));
        this.setState({
            indexMap: pv+1,
        });
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
    
    handleMouseEnter(e) {
        console.log("mouse enter",e);
        this.setState(this.state);
        var newColor = '#66666';
        this.setState({
            backgroundColor:newColor,
            textcolor:'yellow'
        });
    }

    componentWillUpdate(){
    }

    updateWindowDimensions() {
		this.setState({ widthOfWin: window.innerWidth, heightofWin: window.innerHeight });
    }

    render() {

        const {lang} = this.props;
        let mapAdrsCa = this.props.lang === 'en' ? 
          this.state.mapContactOfCanada : this.state.mapContactOfCanadaZh;    
        let mapAdrsUs = this.props.lang === 'en' ? 
          this.state.mapContactOfUsa : this.state.mapContactOfUsaZh;    

        let classactive = [];
        let difHeight = this.state.heightToTop - this.state.ts0height; 
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts0top - this.state.heightofWin/2) {
            classactive[0] = "ft-about-ContentComponent active";
        } else {
            classactive[0] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts1top - this.state.heightofWin/2) {
            classactive[1] = "ft-about-ContentComponent active";
        } else {
            classactive[1] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts2top - this.state.heightofWin/2) {
            classactive[2] = "ft-about-ContentComponent active";
        } else {
            classactive[2] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts3top - this.state.heightofWin/2) {
            classactive[3] = "ft-about-ContentComponent active";
        } else {
            classactive[3] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts4top - this.state.heightofWin/2) {
            classactive[4] = "ft-about-ContentComponent active";
        } else {
            classactive[4] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts5top - this.state.heightofWin/2) {
            classactive[5] = "ft-about-ContentComponent active";
        } else {
            classactive[5] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts6top - this.state.heightofWin/2) {
            classactive[6] = "ft-about-ContentComponent active";
        } else {
            classactive[6] = "ft-about-ContentComponent";
        }
        if	(difHeight > 0 && this.state.heightToTop >= this.state.ts7top - this.state.heightofWin/2) {
            classactive[7] = "ft-about-ContentComponent active";
        } else {
            classactive[7] = "ft-about-ContentComponent";
        }
    
        // https://react-slick.neostack.com/docs/example/simple-slider
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 2000,
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            verticalSwiping: false,
            pauseOnHover: true,
            // focusOnSelect: true,
            // adaptiveHeight: false,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            beforeChange: (currentSlide, nextSlide) =>
                this.setState({ oldSlide: currentSlide, activeSlide: nextSlide }),
            afterChange: currentSlide =>
            this.setState({ activeSlide2: currentSlide })
        };

        let aboutBestBtnStyle = {
            // opacity: this.state.opacityVar,
            backgroundColor: this.state.selectedBgColor,
        };

        let headerMenu = (<div/>);
        if (this.state.heightToTop > this.state.abouttop/4){
            headerMenu =(
               <Header callerName={this.state.callerName1}/>
            );
        }
    
        return (
            <>
            {/* <Header/> */}
            {/* <Header callerName={this.state.callerName}/> */}
            {headerMenu}

            {/* The best Asian food delivery */}
            {/* <div className="ft-about-best-bg"> */}
            <div className={this.state.selectedBgClassName}>
            <div className="ft-about-best-content">
                <Header callerName={this.state.callerName}/>
                {/* <img className="ft-about-best-bg-img" src={require('../../assets/imgs/bg/fantuan-about-best.jpg')} alt=""/> */}
                {/* <img className="ft-about-best-bg-img" src={this.state.selectedFdImage} alt=""/>   20191210 */}
                <div className="ft-about-best-text-buttons">
                <p className="ft-about-best-thebest"><FormattedMessage id="ft_about_best_p1"/></p>
                <strong className="ft-about-best-af blink"><FormattedMessage id="ft_about_best_p2"/></strong><br/>
                <strong className="ft-about-best-del"><FormattedMessage id="ft_about_best_p3"/></strong>
                <br/>
                <br/>
                <div className="ft-about-best-buttons">
                    <div>
                        <Button className="ft-w1140-button-fs16 ft-about-best-button0" style={aboutBestBtnStyle} variant="outline-light" href={this.state.selectedLink}>
                            <FormattedMessage id="ft_about_best_btn"/> >
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

            {/* <div id="about" ></div> */}
            <div ref="innerabout" id="aboutid" className="ft-about-about-bg">
                <div className="ft-about-about-content">
                    <Card className="col-auto">
                        <Card.Body>
                            <Card.Title className="ft-w1140-section-fs40 text-center title_in_body"><FormattedMessage id="ft_about_fantuan_title"/></Card.Title>
                            <Card.Text className="ft-w1140-text-fs18"><FormattedMessage id="ft_about_fantuan_text"/></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* history */}
            <div className="ft-about-history-bg">
                <div className="ft-about-history-content">
                <div className="ft-about-history-timeline">
                <div className="ft-about-history-title ft-w1140-section-fs40"><FormattedMessage id="ft_about_history_title"/></div>
                <div className="ft-about-TimelineComponent">
                    <div ref="inner0" class={classactive[0]}>
                        <div className="ft-about-YearComponent">
                        <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                            <FormattedMessage id="ft_about_history_year0"/>
                        </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title0"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text0"/>  
                            </span>
                            {/* <span className="ft-about-DescriptionComponentTextOptional ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text01"/>
                            </span> */}
                        </div>
                        </div>
                    </div>
                    <div ref="inner1" class={classactive[1]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                <FormattedMessage id="ft_about_history_year1"/>
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title1"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text1"/>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner2" class={classactive[2]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                <FormattedMessage id="ft_about_history_year2"/>
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title2"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text2"/>  
                            </span>
                            {/* <span className="ft-about-DescriptionComponentTextOptional ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text21"/>
                            </span> */}
                        </div>
                        </div>
                    </div>
                    <div ref="inner3" class={classactive[3]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                <FormattedMessage id="ft_about_history_year3"/>
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title3"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text3"/>
                            </span>
                            {/* <span className="ft-about-DescriptionComponentTextOptional ft-w1140-text-fs14">
                                I'm an amazing optional text
                            </span> */}
                        </div>
                        </div>
                    </div>
                    <div ref="inner4" class={classactive[4]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                <FormattedMessage id="ft_about_history_year4"/>
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title4"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text4"/>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner5" class={classactive[5]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                <FormattedMessage id="ft_about_history_year5"/>
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title5"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text5"/>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner6" class={classactive[6]}>
                    <div className="ft-about-YearComponent">
                        <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                            &nbsp;
                        </div>
                    </div>
                    <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title6"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text6"/>
                            </span>
                        </div>
                    </div>
                    </div>
                    <div ref="inner7" class={classactive[7]}>
                    <div className="ft-about-YearComponent">
                        <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                            &nbsp;
                        </div>
                    </div>
                    <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            <FormattedMessage id="ft_about_history_title7"/>
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                <FormattedMessage id="ft_about_history_text7"/>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

            {/* contact */}
            <div id="contactusid" className="ft-about-contact-bg">
                <div className="ft-about-contact-content">
                <div>
                    <div className="ft-about-contact-title ft-w1140-section-fs40"><FormattedMessage id="ft_about_contactus_title"/></div>
                    <div className="ft-about-contact-note1 ft-w1140-section-fs16">
                        <FormattedMessage id="ft_about_contactus_text"/>
                    </div>
                    {/* <div className="ft-about-contact-note2 ft-w1140-section-fs16">
                        what you need, right when you need it.
                    </div> */}
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="canada">
                <Col>
                    <Row>
                    <Nav className="ft-about-contact-buttons">
                        <Nav.Item>
                        <Nav.Link className="ft-about-contact-but-ca ft-w1140-text-fs14"  eventKey="canada"><FormattedMessage id="ft_about_contactus_country1"/></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="ft-about-contact-but-us ft-w1140-text-fs14" eventKey="unitedstates"><FormattedMessage id="ft_about_contactus_country2"/></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Row>
                    <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="canada">
                            <div className="ft-home-contact-mapadr">
                                <div className="ft-home-contact-map">
                                    {mapAdrsCa
                                        .filter(ft => Number(ft.id) == this.state.indexMap)
                                        .map((item,index) => (
                                        <img key={index} className="ft-home-contact-map-img" src={item.imgsrc}
                                        alt="map"/>
                                    ))}
                                </div>
                                <div className="ft-home-contact-adr">
                                    <Slider {...settings}>
                                        {mapAdrsCa.map((ft,index) => (
                                        <div className="ft-home-contact-card" onMouseMove={(e)=>this.handleMouseMove({index},e)}>
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs18 ft-home-contact-info-title">{ft.city}</p> 
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs14">{ft.phone}</p> 
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs14">{ft.email}</p> 
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs14">{ft.address}</p> 
                                        </div>
                                        ))}
                                    </Slider>        
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="unitedstates">
                            <div className="ft-home-contact-mapadr">
                                <div className="ft-home-contact-map">
                                    {mapAdrsUs
                                        .filter(ft => Number(ft.id) == this.state.indexMap)
                                        .map((item,index) => (
                                        <img key={index} className="ft-home-contact-map-img" src={item.imgsrc}
                                        alt="map"/>
                                    ))}
                                </div>
                                <div className="ft-home-contact-adr">
                                    <Slider {...settings}>
                                        {mapAdrsUs.map((ft,index) => (
                                        <div className="ft-home-contact-card" onMouseMove={(e)=>this.handleMouseMove({index},e)}>
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs18 ft-home-contact-info-title">{ft.city}</p> 
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs14">{ft.phone}</p> 
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs14">{ft.email}</p> 
                                            <p className="ft-home-contact-info ft-w1140-smtext-fs14">{ft.address}</p> 
                                        </div>
                                        ))}
                                    </Slider>        
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                    </Row>
                </Col>
                </Tab.Container>
                </div>
            </div>

            <Footer/>
            </>
        );
    }
}

// export default About;
function mapStateToProps(state){
    return{
      lang: state.locale.lang
    };
  }
export default connect(mapStateToProps)(About);
  
