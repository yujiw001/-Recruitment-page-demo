import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button, Form, Input } from 'antd';

import UploadButton from '../Upload/Upload';

import './JobForm.component.style.css';

const CollectionCreateForm = Form.create( { name: 'form_in_modal'} )(
  class extends Component {

    constructor() {
      super();
      this.state = {
        formLayout: 'vertical',
        confirmDirty: false,
      };
    }

    render() {
      const { formLayout } = this.state;
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const { TextArea } = Input;
      return (
        <Modal
          visible={visible}
          width={597}
          okText="Submit"
          onOk={onCreate}
          onCancel={onCancel}
          closable={false}
        >
          <div className='fh_rec_det_apply_box'>
            <h1 className='fh_rec_det_apply_title'>{this.props.title}</h1>
            <hr />
            <h1 className='fh_rec_det_apply_city'>City: {this.props.area}</h1>

            <Form layout={formLayout} onSubmit={this.handleSubmit} >

              <div className='fh_rec_det_apply_name'>
                <Form.Item label={<span className='fh_rec_det_apply_label'>Name</span>} >
                  {
                    getFieldDecorator('firstname', {
                      rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
                    })
                    (<Input placeholder='First Name' allowClear={true} style={{width:'242px'}}/>)
                  }
                </Form.Item>
                
                <Form.Item label='' >
                  {
                    getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
                    })
                    (<Input placeholder='Last Name' allowClear={true} style={{width:'242px'}}/>)
                  }
                </Form.Item>
              </div>

              <Form.Item label={<span className='fh_rec_det_apply_label'>E-mail</span>}>
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

              <Form.Item label={<span className='fh_rec_det_apply_label'>Description</span>} >
                <TextArea rows={4} allowClear={true} />
              </Form.Item>

              <Form.Item label={<span className='fh_rec_det_apply_label'>Upload Resume</span>} required>
                {/* {
                  getFieldDecorator('resume', {
                    rules: [ {validator: this.handleUploadValidator}],
                  })
                  ( */}
                    <UploadButton title='Add a File' />
                  {/* ) 
                } */}
              </Form.Item>
            </Form>
            </div>
        </Modal>
      );
    }
  },
);


class JobApplication extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  /* handleSubmit = e => {
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
  }; */

  render() {

    let pos_title = this.props.title;
    let pos_area = this.props.area;
    /* .......... */

    return (
      <div>
        <Button className='fh_rec_det_apply_button' onClick={this.showModal}>
          <span className='fh_rec_det_apply_content'>Apply for this position ></span>
        </Button>

        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          width={600}
          visible={this.state.visible}
          onCreate={this.handleCreate}
          onCancel={this.handleCancel}
          title={pos_title}
          area={pos_area}
        />
      </div>
    );
  }
}

export default JobApplication;