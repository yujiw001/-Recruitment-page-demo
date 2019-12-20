import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AboutCN from './AboutCN';
import Header from './Header';
import Footer from './Footer';

class Language extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.location);
    console.log(this.props.history);
    console.log(this.props.match);

    return (
      <>
        {/* <Switch> */}
          <Redirect to="/aboutcn" />
        {/* </Switch> */}
      </>
    );
  }
}

export default Language;