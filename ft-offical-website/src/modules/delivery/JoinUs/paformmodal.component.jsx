import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { FormattedMessage} from 'react-intl';

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

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button onClick={this.showModal} className='ft_partner_modal_button'>
          <img className='ft_partner_modal_button_icon' src={require('../../../assets/imgs/icon/delivery-deliver-document@2x.png')} />
          <FormattedMessage id="fd_partner_become_button"/>
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
                <p className='ft_partner_modal_title'><FormattedMessage id="fd_partner_become_title"/></p>
                <hr style={{'padding-bottom':'10px'}} />
                <PAForm />
                <button onClick={this.handleCancel} className='ft_partner_cancle_button'>
                  <FormattedMessage id="fd_partner_become_close"/>
                </button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default PAFormModal;