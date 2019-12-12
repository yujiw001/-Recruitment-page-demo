import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import PAForm from './paform.component';

import './adformmodal.component.style.css';

class ADFormModal extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
ƒ
  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.showModal} className='ft_partner_modal_button' style={{height:'60px', background:'rgba(19,194,194,1)', 'font-size':'16px', color:'rgba(255,255,255,1)'}}>
          Contact Now
        </Button>
        <Modal
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_partner_body'>
                <p className='ft_partner_modal_title'>Advertisement for investment</p>
                <hr style={{'padding-bottom':'10px'}} />
                <PAForm />
                <button onClick={this.handleCancel} className='ft_partner_cancle_button'>
                    Close
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default ADFormModal;