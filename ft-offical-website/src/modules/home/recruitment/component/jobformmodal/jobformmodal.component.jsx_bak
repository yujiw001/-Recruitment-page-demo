import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import JobForm from './jobform.component';

import './jobformmodal.component.style.css';

class JobFormModal extends Component {
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
    let pos_title = this.props.title;
    let pos_area = this.props.area;
    return (
      <div>
        <Button onClick={this.showModal} className='ft_rec_button' 
                style={{height:'49px', 
                        background:'rgba(6,34,54,1)', 
                        'border-radius':'100px',
                        'font-size':'16px',
                        color:'rgba(255,255,255,1)',
                      }}
        >
          Apply for this position > 
        </Button>
        <Modal
          visible={visible}
          closable={false}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width='597px'
        >
            <div className='fh_rec_form_body'>
                <JobForm title={pos_title} area={pos_area} />
                <button onClick={this.handleCancel} className='ft_rec_cancle_button'>
                    Close
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default JobFormModal;