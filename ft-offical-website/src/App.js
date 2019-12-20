// =================================================================
// Program: App.js - the App page in the website to process paths
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React, {userContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect, Provider } from 'react-redux';
import {setLocale} from './actions/locale';

import {IntlProvider} from 'react-intl';
import zh_CN from './locale/LangZh';
import en_US from './locale/LangEn';

import About from './modules/home/About';
import AboutCN from './modules/home/AboutCN';
import News from './modules/home/News';
import Career from './modules/home/Career';
import Language from './modules/home/Language';

// import Test from './test/Test11TimeSteps';
// import Test from './test/Test13Modal';
// import Test from './test/Test15header';
import Test from './test/Test14encn';

import RecruitmentNewsDetail from './modules/home/recruitment/Recruitment_news_details.component';
import RecruitmentDetail from './modules/home/recruitment/Recruitment_details.component';

import NewsroomDetail from './modules/home/newsroom/Newsroom_details.component';

import Delivery from './modules/delivery/DeliveryHome';
import Partner from './modules/delivery/DeliveryPartner';
import Deliver from './modules/delivery/DeliveryDeliver';
import Paotui from './modules/delivery/DeliveryPaotui';
import FAQ from './modules/delivery/DeliveryFAQ';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let messages = {}
    messages['en'] = en_US;
    messages['zh'] = zh_CN;

    const {store, history, currLocale, lang} = this.props;

    return (
      <>
        {/* <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}> */}
        {/* <IntlProvider locale={this.state.lang} messages={messages[this.state.lang]}> */}
        {/* <IntlProvider locale={currLocale} messages={messages[currLocale === 'en' ? 'en' : 'zh']}> */}
        <IntlProvider locale={lang} messages={messages[lang]}>
        <Switch>
          <Route exact path='/about' component={About} />
          {/* <Route exact path='/aboutcn' component={AboutCN} /> */}
  
          <Route exact path='/news' component={News} />
          <Route exact path="/news/details/:newspost" component={NewsroomDetail} />
  
          <Route exact path='/career' component={Career} />
          <Route exact path="/career/news_details/:rec_newspost" component={RecruitmentNewsDetail} />
          <Route exact path="/career/details/:jobpost" component={RecruitmentDetail} />
  
          <Route exact path='/language' component={Language} />
          {/* <Route exact path='/langen2cn' component={LangEn2Cn} /> */}
          {/* <Route exact path='/langcn2en' component={LangCn2En} /> */}
          <Route exact path='/test' component={Test} />
  
          {/* delivery */}
          <Route exact path='/delivery' component={Delivery} />
          <Route exact path='/partner' component={Partner} />
          <Route exact path='/deliver' component={Deliver} />
          <Route exact path='/language' component={Language} />
          <Route exact path='/paotui' component={Paotui} />
          <Route exact path='/faq' component={FAQ} />
  
          {/* Redirect to home */}
          <Redirect to="/about" />
        </Switch>
        </IntlProvider>
        
      </>
    )
  }
}

App.prototypes = {
  lang: PropTypes.string.isRequired
}

function mapStateToProps(state){
  return{
    lang: state.locale.lang
  };
}
export default connect(mapStateToProps, {setLocale})(App);

