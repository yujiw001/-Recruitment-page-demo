// =================================================================
// Program: DeliveryPaotui.js - the paotui page of the delivery
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// Note   : the function was canceled.
// =================================================================

import React, { Component } from 'react';

import Header from './DeliveryHeader';
import Footer from './DeliveryFooter';

class DeliveryPaotui extends Component {
  render() {
    return (
      <>
        <Header/>
        <div>
          <h2>外卖Paotui</h2>
        </div>
        <Footer/>
      </>
    );
  }
}

export default DeliveryPaotui;