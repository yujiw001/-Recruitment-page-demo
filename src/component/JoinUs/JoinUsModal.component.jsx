import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import JoinUs from './JoinUs.component';

import './JoinUsModal.component.style.css';

class JoinUsModal extends Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.showModal} className='ft_driver_modal_button' style={{height:'60px', background:'rgba(9,48,65,1)', 'font-size':'16px', color:'rgba(255,255,255,1)'}}>
          Join Us
        </Button>
        <Modal
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='ft_driver_body'>
                <p className='ft_driver_modal_title'>Become a driver</p>
                <hr style={{'padding-bottom':'10px'}} />
                <JoinUs />
                <button onClick={this.handleCancel} className='ft_driver_cancle_button'>
                    Close
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default JoinUsModal;