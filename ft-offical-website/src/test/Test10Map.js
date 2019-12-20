import React, { Component, useState } from 'react';
import { Collapse, Icon } from 'antd';
// import { Carousel } from 'antd';
// import 'antd/dist/antd.css';
import { Spring } from'react-spring';


import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'

import { Transition, CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';


// import Swiper from 'react-id-swiper';
// import 'swiper/css/swiper.css';

import './Test10Map.css';


class DeliveryFAQ extends Component {

render() {
    return (
        <>
            <div className="ft-about-map-bg">
              <div className="ft-about-map-content">
                <img className="ft-about-map-img1" src={require('../assets/imgs/map/bc.svg')} alt="map part 1"/>
                <img className="ft-about-map-img2" src={require('../assets/imgs/map/Alberta.svg')} alt="map part 2"/>
                <img className="ft-about-map-img3" src={require('../assets/imgs/map/Saskatchewan.svg')} alt="map part 3"/>
                <img className="ft-about-map-img4" src={require('../assets/imgs/map/Manitoba.svg')} alt="map part 4"/>
                <img className="ft-about-map-img5" src={require('../assets/imgs/map/Ontario.svg')} alt="map part 5"/>
                <img className="ft-about-map-img6" src={require('../assets/imgs/map/Quebec.svg')} alt="map part 6"/>
                <img className="ft-about-map-img7" src={require('../assets/imgs/map/NAL.svg')} alt="map part 7"/>
                <img className="ft-about-map-img8" src={require('../assets/imgs/map/other.svg')} alt="map part 8"/>
                </div>
            </div>
        </>
    );
    }
}

export default DeliveryFAQ;