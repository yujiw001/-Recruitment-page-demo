import React, { Component } from 'react';
import ScoringHeader from '../scoring_header/scoring_header';
import Modal from '../modal/modal.component';
import QRcode from '../../images/timg.jpg';
import CardList from '../cardList/card_list.component';
import singleCard from '../card/single_card.component';
import IntroducionData from './introduction_data';
import Pagination from '../paginate/pagebutton/pagebutton.component';
import JoinUs from '../JoinUs/JoinUs.component';
import Example from '../collapse/collapse.component';
class ScoringHomepage extends Component {
    constructor(props) {
      super(props)
      this.confirm = this.confirm.bind(this)
      this.showModal = this.showModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.state = {
        visible: false,
        renderData:IntroducionData,
      }
    }
  
    showModal() {
      this.setState({ visible: true })
    }
  
    closeModal() {
      console.log('我是onClose回调')
    }
  
    confirm() {
      console.log('我是confirm回调')
    }
  
    render() {
      const { visible } = this.state
      return <div className="app">
        <ScoringHeader />
        <div>
            <h1>不知吃啥？上饭团点评查一查</h1>
        </div>
        <button onClick={this.showModal}>开始使用</button>
        <Modal visible={visible} title="这是自定义title" confirm={this.confirm} onClose={this.closeModal} />
        <CardList {...this.state}/>
        <Pagination {...this.state} ItemComponent={singleCard}/>
        {/* <FormInput /> */}
        <JoinUs />
        <Example />
    </div>
    }
  }
  export default ScoringHomepage;
  
