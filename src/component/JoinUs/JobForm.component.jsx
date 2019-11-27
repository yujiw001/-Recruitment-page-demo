import React from 'react';
import ReactDOM from 'react-dom';

import { Form, Input, Button } from 'antd';

  import UploadButton from '../Upload/Upload';

  import './JobForm.component.style.css';
  
  class ApplicationForm extends React.Component {

    constructor() {
        super();
        this.state = {
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

    /* handleUploadValidator = (info, callback) => {
      if (info.file.length === 0) {
        callback('Please upload your resume!')
      }
      else {
        callback()
      }
    } */

  
    render() {
      const { formLayout } = this.state;
      const { getFieldDecorator } = this.props.form;
      const { TextArea } = Input;

      return (
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
              </div>
            </Form.Item>
          </div>
        </Form>
      );
    }
  }
  
  const WrappedApplicationForm = Form.create({ name: 'application' })(ApplicationForm);

  export default WrappedApplicationForm;