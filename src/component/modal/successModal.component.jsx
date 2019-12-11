import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import './successModal.component.style.css';

class SuccessModal extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Button onClick={this.showModal} className='s_modal_button' 
                style={{height:'54px', background:'rgba(6,34,54,1)', 'font-size':'16px', color}}
        >
          Submit
        </Button>
        <Modal
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={ null }
          width='597px'
        >
          <p className='s_modal_title'>Thank You</p>
          <p className='s_modal_subtitle'>Submit Completed</p>

          <div className='s_modal_image'>
            <img src={require('../../images/check.png')} style={{width:'161px', height:'161px'}}/>
          </div>

          <p className='s_modal_content'>We will Contact you within 7 working days by Email</p>

          <hr />
          <Button className='s_modal_button' onClick={this.handleCancel}>
            Close
          </Button>

        </Modal>
      </div>
    );
  }
}
export default SuccessModal;