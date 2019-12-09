import React from 'react';
import FormInput from '../form_input/formInput.component';
import PostBlob from '../postblob/postblob.component';
import Verificode from '../vertification/vertication.component';
import Codebox from '../codeBox/codeBox.component';
import { Select, Input, Form } from 'antd';
import { Modal } from 'react-bootstrap';

import axios from 'axios';
class PAForm extends React.Component  {
    constructor(){
        super();
        //1
        this.refreshCode=this.refreshCode.bind(this);
        this.state ={
            Country: '',
            Area: '',
            First_Name: '',
            Last_Name: '',
            Mobile:'',
            Email: '',
            BName: '',
            Address: '',
            City: '',
            PostalCode: '',
            Category: '',
            Description:'at least 10 words',
            code:[] //this variable is used to store the vertification code
        }
    }

    refreshCode(){
        this.GetVerifiCode();
    }

    GetVerifiCode(){
        this.setState({
        code:this.genRandomString(4)
       });
    }

    genRandomString = len => {
        const text = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const rdmIndex = text => Math.random() * text.length | 0;
        let rdmString = '';    
        for(; rdmString.length < len; rdmString += text.charAt(rdmIndex(text)));
        return rdmString;
    }

    componentDidMount()
    {
      this.GetVerifiCode();
    }

    handleSubmit = async event =>{
        alert('Area name was submitted: ' + this.state.Area);
        event.preventDefault();
        var data = {
            Country: this.state.Country,
            Area: this.state.Area,
            First_Name: this.state.First_Name,
            Last_Name:this.state.Last_Name,
            Mobile:this.state.Mobile,
            Email: this.state.Email,
            BName: this.state.BName,
            Address:this.state.Address,
            City:this.state.City,
            PostalCode:this.state.PostalCode,
            Category: this.state.Category,
            Description:this.state.Description
        }
        console.log(data);
        axios({
           method: 'post' ,
           url: 'http://localhost:3000/drivers/add' ,
           data: data
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
        
    };

    handleChange = event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    };

    handleCheckbox = event => {
        const{name,value} = event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value])}) }//语法:this.state[name]
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))})
        }
    }

    render() {
        const { Country, Area, First_Name, Last_Name, Mobile, Email, BName, Address, City, PostalCode, Category, Description } = this.state;
        const ownStyle={
            width: 'calc(100% - 10px)',
            height: '45px',
            margin: '15px 0',
            backgroundColor: '#ffffff'
        };
        const {code}=this.state;
        
        return(
            <div className='Form_input'>
                <h1>Area</h1>
                <select
                    name='Area'
                    value={Area}
                    onChange={this.handleChange}
                    style={{ width: '242px' }}
                >
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Toronto">Toronto</option>
                </select>

                <form className='JoinUs' onSubmit={this.handleSubmit}>
                    <span>Name</span>
                    <Input type='text' name='First_Name' value={First_Name} onChange={this.handleChange} label='First Name' required></Input>
                    <Input type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} label='Last Name' required></Input>
                    <span>Phone</span>
                    <Input type='text' name='Mobile' value={Mobile} onChange={this.handleChange} label='Phone' required></Input>
                    <span>Email</span>
                    <Input type='text' name='Email' value={Email} onChange={this.handleChange} label='Email' required></Input>
                    <span>Business Name</span>
                    <Input type='text' name='BName' value={BName} onChange={this.handleChange} label='Business Name' required></Input>
                    <span>Business Address</span>
                    <Input type='text' name='Address' value={Address} onChange={this.handleChange} label='Street Address' required></Input>
                    <Input type='text' name='City' value={City} onChange={this.handleChange} label='City' required></Input>
                    <Input type='text' name='PostalCode' value={PostalCode} onChange={this.handleChange} label='ZIP/Postal Code' required></Input>
                    <span>Business Category</span>
                    <Input type='text' name='Category' value={Category} onChange={this.handleChange} label='手机' required></Input>
                    
                    <div>
                        <label>
                            <textarea name='Description' value={Description} onChange={this.handleChange}/>
                        </label>
                    </div>

                        <div style={{width:'200px',height:'35px'}}>
                            <Verificode ownStyle={ownStyle} onGetRefresh={this.refreshCode} data={code}></Verificode>
                            <Codebox />
                        </div>

                        <button type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}
export default PAForm;