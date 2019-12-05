import React, { Component } from 'react';

import { Modal, Button, Form, Input, Select } from 'antd';

class PAForm extends Component {

  constructor() {
    super();
    this.state = {
      Area: '',
      First_Name: '',
      Last_Name: '',
      Mobile: '',
      Email: '',
      BName: '',
      Address: '',
      City: '',
      PostalCode: '',
      Category: '',
      Description: '',
      code: [],
    };
  }

  handleChange = async event => {
    //event.target will end up being the input element itself. And we want to pull off the 'name and value'
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
      });
  };

  handleSubmit(event) {
    alert('Area was submitted: ' + this.state.Area);
    event.preventDefault();
  }

  render() {
    
    const { Area, First_Name, Last_Name, Mobile, Email, BName, Address, City, PostalCode, Category, Description }=this.state;
    const { TextArea } = Input;
    const { Option } = Select;

    return (
        <>
          <h1 className=''>{this.props.title}</h1>
          <hr />

          <form onSubmit={this.handleSubmit} >
            
            <select
              name='Area'
              value={Area}
              onChange={this.handleChange}
            >
              <option name='Area' value='Los Angeles'>Los Angeles</option>
              <option name='Area' value='Vancouver'>Vancouver</option>
              <option name='Area' value='Toronto'>Toronto</option>
            </select>
          

            {/* <Form.Item label={<span className=''>Name</span>} >
              <Input type='text' name='First_Name' value={First_Name} onChange={this.handleChange} placeholder='First Name' />
            </Form.Item>
            
            <Form.Item label='' >
              <Input type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} placeholder='Last Name' />
            </Form.Item>

            <Form.Item label={<span className=''>Phone</span>}>
              <Input typt='text' name='Mobile' value={Mobile} onChange={this.handleChange} placeholder='Phone Number' />
            </Form.Item>
            
            <Form.Item label={<span className=''>E-mail</span>}>
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
              })(<Input type='text' name='Email' value={Email} onChange={this.handleChange} placeholder='Email Address' />)}
            </Form.Item>

            <Form.Item label={<span className=''>Business Name</span>}>
              <Input type='text' name='BName' value={BName} onChange={this.handleChange} placeholder='Business Name' />
            </Form.Item>

            <Form.Item label={<span className=''>Business Address</span>}>
              <Input type='text' name='Address' value={Address} onChange={this.handleChange} placeholder='Stree Address' />
            </Form.Item>
            <Form.Item label=''>
              <Input type='text' name='Cisty' value={City} onChange={this.handleChange} placeholder='City' />
            </Form.Item>
            <Form.Item label=''>
              <Input type='text' name='PostalCode' value={PostalCode} onChange={this.handleChange} placeholder='ZIP / Postal Code' allowClear={true} />
            </Form.Item>

            <Form.Item label='Business Category'>
              <Input type='text' name='Category' value={Category} onChange={this.handleChange} placeholder='Category' />
            </Form.Item>

            <Form.Item label={<span className=''>Description</span>} >
              <TextArea rows={4} name='Description' value={Description} onChange={this.handleChange} />
            </Form.Item> */}
            <button type='submit'>SUBMIT</button>
          </form>
        </>
    );
  }
}

export default PAForm;