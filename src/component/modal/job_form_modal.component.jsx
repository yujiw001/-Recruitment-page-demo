import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Modal, Button } from 'antd';

import UploadButton from '../Upload/Upload';

//import WrappedRegistrationForm from '../JoinUs/JobForm.component';
import '../JoinUs/JobForm.component.style.css';

class JobApplication extends Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      visible: false,
      formLayout: 'vertical',
      confirmDirty: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {

    const { visible } = this.state.visible;
    const { loading } = this.state.loading;
    const { formLayout } = this.state.formLayout;
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    
    return (
      <div>
        <Button className='fh_rec_det_apply_button' onClick={this.showModal}>
            <span className='fh_rec_det_apply_content'>Apply for this position ></span>
        </Button>

        <Modal
          visible={visible}
          width={600}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" htmlType="submit" loading={loading} onClick={this.handleOk}>
                Submit
            </Button>,
            <Button key="back" onClick={this.handleCancel}>
                Close
            </Button>,
          ]}
          closable={false}
        >
          <h1 className='fh_rec_det_apply_title'>Position Title</h1>
          <hr />
          <h1 className='fh_rec_det_apply_city'>City: area</h1>

          <Form layout={formLayout} onSubmit={this.handleSubmit} >
            <div className=''>

              <div className='fh_rec_det_apply_name'>
                <Form.Item label='Name' >
                  {
                    getFieldDecorator('firstname', {
                      rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                    })
                    (<Input placeholder='First Name' allowClear={true} style={{width:'250px'}}/>)
                  }
                </Form.Item>
                
                <Form.Item label='' >
                  {
                    getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                    })
                    (
                      <div className='fh_rec_det_apply_last_name'>
                        <Input placeholder='Last Name' allowClear={true} style={{width:'250px'}}/>
                      </div>
                    )
                  }
                </Form.Item>
              </div>

              <Form.Item label="E-mail" >
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                })(<Input placeholder='Email Address' allowClear={true} />)}
              </Form.Item>

              <Form.Item label='Description' >
                <TextArea rows={4} allowClear={true} />
              </Form.Item>

              <Form.Item label='Upload Resume' required>
                {/* {
                  getFieldDecorator('resume', {
                    rules: [ {validator: this.handleUploadValidator}],
                  })
                  ( */}
                    <UploadButton title='Add a File' />
                  {/* ) 
                } */}
              </Form.Item>

              <hr />

              <Form.Item >
                <div className='fh_rec_det_apply_submit'>
                  <Button type="primary" htmlType="submit" className='fh_rec_det_apply_submit_button'>
                    Submit
                  </Button>
                  <Button key="back" onClick={this.handleCancel}>
                        Close
                  </Button>
                </div>
              </Form.Item>
            </div>
          </Form>

        </Modal>
      </div>
    );
  }
}

export default JobApplication;