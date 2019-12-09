import React, { Component } from 'react';
import axios from 'axios';
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
    var data = {
      Area: this.state.Area,
      First_Name: this.state.First_Name,
      Last_Name:this.state.Last_Name,
      Mobile:this.state.Mobile,
      Email:this.state.Email,
      Bname:this.state.Bname,
      Address:this.state.Address,
      City:this.state.City,
      PostalCode:this.state.PostalCode,
      Category:this.state.Category,
      description:this.state.Description
    }
    axios({
      method: 'post' ,
      url: 'http://localhost:3000//partner/add' ,
      data: data
    })
    .then(function (response) {
       console.log(response);
     })
    .catch(function (error) {
       console.log(error);
     });
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
          

            
              <Input type='text' name='First_Name' value={First_Name} onChange={this.handleChange} placeholder='First Name' />
            
            
            
              <Input type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} placeholder='Last Name' />
            

            
              <Input typt='text' name='Mobile' value={Mobile} onChange={this.handleChange} placeholder='Phone Number' />
            
            
            
              <Input type='text' name='Email' value={Email} onChange={this.handleChange} placeholder='Email Address' />)}
            

            
              <Input type='text' name='BName' value={BName} onChange={this.handleChange} placeholder='Business Name' />
            

            
              <Input type='text' name='Address' value={Address} onChange={this.handleChange} placeholder='Stree Address' />
            
            
              <Input type='text' name='City' value={City} onChange={this.handleChange} placeholder='City' />
            
            
              <Input type='text' name='PostalCode' value={PostalCode} onChange={this.handleChange} placeholder='ZIP / Postal Code' allowClear={true} />
            

            
              <Input type='text' name='Category' value={Category} onChange={this.handleChange} placeholder='Category' />
            

            
              <TextArea rows={4} name='Description' value={Description} onChange={this.handleChange} />
            
            <button type='submit'>SUBMIT</button>
          </form>
        </>
    );
  }
}

export default PAForm;