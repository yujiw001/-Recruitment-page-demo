// =================================================================
// Program: AboutCN.js - the about page in the office website 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// Note   : It was canceled
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
import MapMatchWithContact from './data/About.data_of_map_contact';
import MapContactOfCanada from './data/About.data_of_map_contact_ca';
import MapContactOfUsa from './data/About.data_of_map_contact_us';

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
            mapAdrs: MapMatchWithContact,
            mapAdrsCa: MapContactOfCanada,
            mapAdrsUs: MapContactOfUsa,

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
                <p className="ft-about-best-thebest">最好的</p>
                    <strong className="ft-about-best-af blink">亚洲美食</strong><br/>
                    <strong className="ft-about-best-del">饭团外卖</strong>
                    <br/>
                    <br/>
                <div className="ft-about-best-buttons">
                    <div>
                        <Button className="ft-w1140-button-fs16 ft-about-best-button0" style={aboutBestBtnStyle} variant="outline-light" href={this.state.selectedLink}>
                            访问网站 >
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
                            <Card.Title className="ft-w1140-section-fs40 text-center title_in_body">About Fantuan</Card.Title>
                            <Card.Text className="ft-w1140-text-fs18">
                            目前，饭团外卖已覆盖温哥华、多伦多、维多利亚，埃德蒙顿等主流一线城市，全加拿大用户量35万+，合作商家4000多家，是加拿大最大的华人送餐平台。主营业务除送餐外，还有广告推广、线上商城、自提业务等。2019年，饭团将以势如破竹之势进军卡尔加里、蒙特利尔、西雅图、滑铁卢，密西沙加等地，实现加拿大送餐服务全覆盖。   
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* history */}
            <div className="ft-about-history-bg">
                <div className="ft-about-history-content">
                <div className="ft-about-history-timeline">
                <div className="ft-about-history-title ft-w1140-section-fs40">公司发展史</div>
                <div className="ft-about-TimelineComponent">
                    <div ref="inner0" class={classactive[0]}>
                        <div className="ft-about-YearComponent">
                        <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                            2014 - 现在
                        </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            饭团成立
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                            目前，饭团外卖已覆盖温哥华、多伦多、维多利亚，埃德蒙顿等主流一线城市，全加拿大用户量35万+，合作商家4000多家，是加拿大最大的华人送餐平台。主营业务除送餐外，还有广告推广、线上商城、自提业务等。2019年，饭团将以势如破竹之势进军卡尔加里、蒙特利尔、西雅图、滑铁卢，密西沙加等地，实现加拿大送餐服务全覆盖。  
                            </span>
                            <span className="ft-about-DescriptionComponentTextOptional ft-w1140-text-fs14">
                            目前，饭团外卖已覆盖温哥华、多伦多、维多利亚，埃德蒙顿等主流一线城市，全加拿大用户量35万+，合作商家4000多家，是加拿大最大的华人送餐平台。主营业务除送餐外，还有广告推广、线上商城、自提业务等。2019年，饭团将以势如破竹之势进军卡尔加里、蒙特利尔、西雅图、滑铁卢，密西沙加等地，实现加拿大送餐服务全覆盖。
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner1" class={classactive[1]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                2016 - Sep
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            Expanded to Toronto
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                            目前，饭团外卖已覆盖温哥华、多伦多、维多利亚，埃德蒙顿等主流一线城市，全加拿大用户量35万+，合作商家4000多家，是加拿大最大的华人送餐平台。主营业务除送餐外，还有广告推广、线上商城、自提业务等。2019年，饭团将以势如破竹之势进军卡尔加里、蒙特利尔、西雅图、滑铁卢，密西沙加等地，实现加拿大送餐服务全覆盖。
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner2" class={classactive[2]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                2017 - Apr
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            Launched self-pickup service
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                Fantuan was founded in Vancouver, Canada in 2014 and it is a one stop service platform provides food delivery, reviews,  
                            </span>
                            <span className="ft-about-DescriptionComponentTextOptional ft-w1140-text-fs14">
                                I'm an amazing optional text
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner3" class={classactive[3]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                2018 - Sep
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            Launched Fantuan Reviews
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                            Life can be complicated but ordering food doesn't have to be.
                            </span>
                            <span className="ft-about-DescriptionComponentTextOptional ft-w1140-text-fs14">
                                I'm an amazing optional text
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner4" class={classactive[4]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                2018 - Dec
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            Raised seed round
                        </p>
                        <div className="ft-about-DescriptionComponent">
                            <span className="ft-about-DescriptionComponentText ft-w1140-text-fs14">
                                Fantuan was founded in Vancouver.
                            </span>
                        </div>
                        </div>
                    </div>
                    <div ref="inner5" class={classactive[5]}>
                        <div className="ft-about-YearComponent">
                            <div className="ft-about-YearComponentItem ft-w1140-text-fs18">
                                2019
                            </div>
                        </div>
                        <div className="ft-about-BodyComponent body-component">
                        <p className="ft-about-BodyComponentTitle ft-w1140-text-fs16">
                            Expanded to Seattle
                        </p>
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
                        Expanded to Los Angeles & New York City
                        </p>
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
                        Launched English app
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </div>

            {/* contact */}
            {/* <div className="ft-about-contact-bg">
                <div className="ft-about-contact-content">
                    <div>
                        <div>
                            <div className="ft-about-contact-title ft-w1140-section-fs40">Contact Us</div>
                            <div className="ft-about-contact-note1 ft-w1140-section-fs16">
                                Making your life easier is our top priority. Five-star service gets you 
                            </div>
                            <div className="ft-about-contact-note2 ft-w1140-section-fs16">
                                what you need, right when you need it.
                            </div>
                        </div>
                        <div className="ft-about-contact-buttons">
                            <Button className="ft-about-contact-but-ca ft-w1140-text-fs14" href="link-1">
                                Canada
                            </Button>
                            <Button className="ft-about-contact-but-us ft-w1140-text-fs14" href="partner">
                                United States
                            </Button>
                        </div>
                    </div>
                    <div className="ft-home-contact-mapadr">
                        <div className="ft-home-contact-map">
                            {this.state.mapAdrs
                                .filter(ft => Number(ft.id) == this.state.indexMap)
                                .map((item,index) => (
                                   <img key={index} className="ft-home-contact-map-img" src={item.imgsrc}
                                   alt="map"/>
                            ))}
                        </div>
                        <div className="ft-home-contact-adr">
                            <Slider {...settings}>
                                {this.state.mapAdrs.map((ft,index) => (
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
                </div>
            </div> */}
            <div className="ft-about-contact-bg">
                <div className="ft-about-contact-content">
                <div>
                    <div className="ft-about-contact-title ft-w1140-section-fs40">联系我们</div>
                    <div className="ft-about-contact-note1 ft-w1140-section-fs16">
                        Making your life easier is our top priority. Five-star service gets you 
                    </div>
                    <div className="ft-about-contact-note2 ft-w1140-section-fs16">
                        what you need, right when you need it.
                    </div>
                </div>
                <Tab.Container id="left-tabs-example" defaultActiveKey="canada">
                <Col>
                    <Row>
                    <Nav className="ft-about-contact-buttons">
                        <Nav.Item>
                        <Nav.Link className="ft-about-contact-but-ca ft-w1140-text-fs14"  eventKey="canada">Canada</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link className="ft-about-contact-but-us ft-w1140-text-fs14" eventKey="unitedstates">United States</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Row>
                    <Row>
                    <Tab.Content>
                        <Tab.Pane eventKey="canada">
                            <div className="ft-home-contact-mapadr">
                                <div className="ft-home-contact-map">
                                    {this.state.mapAdrsCa
                                        .filter(ft => Number(ft.id) == this.state.indexMap)
                                        .map((item,index) => (
                                        <img key={index} className="ft-home-contact-map-img" src={item.imgsrc}
                                        alt="map"/>
                                    ))}
                                </div>
                                <div className="ft-home-contact-adr">
                                    <Slider {...settings}>
                                        {this.state.mapAdrsCa.map((ft,index) => (
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
                                    {this.state.mapAdrsUs
                                        .filter(ft => Number(ft.id) == this.state.indexMap)
                                        .map((item,index) => (
                                        <img key={index} className="ft-home-contact-map-img" src={item.imgsrc}
                                        alt="map"/>
                                    ))}
                                </div>
                                <div className="ft-home-contact-adr">
                                    <Slider {...settings}>
                                        {this.state.mapAdrsUs.map((ft,index) => (
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

export default About;
