import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import PAForm from './paform.component';

import './paformmodal.component.style.css';

class PAFormModal extends Component {
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
        <button onClick={this.showModal} className='ft_partner_modal_button'>
          <img className='ft_partner_modal_button_icon' src={require('../../images/drive-document.png')} />
          Join Now
        </button>
        <Modal
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_partner_body'>
                <p className='ft_partner_modal_title'>Become a Partner</p>
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

export default PAFormModal;