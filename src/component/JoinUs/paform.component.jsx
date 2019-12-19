import React  from  'react';
import Verificode  from  '../vertification/vertication.component';
import Codebox  from  '../codeBox/codeBox.component';
import VerificationCode from '../verificationcode/verification/verification.component';  
import { Input }  from  'antd';
import  axios  from  'axios';

import ReactValidator from './react-validator';

import './paform.component.style.css';

class  PAForm  extends  React.Component    {
    constructor(){
            super();
            //1
            this.refreshCode=this.refreshCode.bind(this);
            this.updateflag = this.updateflag.bind(this);
            this.state  ={
                    Area:  '',
                    First_Name:  '',
                    Last_Name:  '',
                    Mobile:'',
                    Email:  '',
                    BName:  '',
                    Address:  '',
                    City:  '',
                    PostalCode:  '',
                    Category:  '',
                    Description:'',
                    /* code:[] */  //this  variable  is  used  to  store  the  vertification  code
                    flag: '',
            }
    }

    refreshCode(){
            this.GetVerifiCode();
    }

    handleChange  =  async  event  =>  {
        //event.target  will  end  up  being  the  input  element  itself.  And  we  want  to  pull  off  the  'name  and  value'
        const  target  =  event.target;
        const  value  =  target.value;
        const  name  =  target.name;
        this.setState({
                [name]:  value
            });
    };

    genRandomString  =  len  =>  {
            const  text  =  'abcdefghijklmnopqrstuvwxyz0123456789';
            const  rdmIndex  =  text  =>  Math.random()  *  text.length  |  0;
            let  rdmString  =  '';        
            for(;  rdmString.length  <  len;  rdmString  +=  text.charAt(rdmIndex(text)));
            return  rdmString;
    }

    /*      componentDidMount()
        {
            this.GetVerifiCode();
        }  */

    componentWillMount() {
        this.validator = new ReactValidator();
    }

    handleSubmit  =  async  event  =>{
        /* if (this.state.flag !== 'correct'){
            alert('Verification code is not correct.');
        } */

        if( this.validator.allValid() ){
            alert('You submitted the form and stuff!');
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }

        event.preventDefault();
        var  data  =  {
                Country: this.state.Country,
                Area: this.state.Area,
                First_Name: this.state.First_Name,
                Last_Name: this.state.Last_Name,
                Mobile: this.state.Mobile,
                Email: this.state.Email,
                BName: this.state.BName,
                Address: this.state.Address,
                City: this.state.City,
                PostalCode: this.state.PostalCode,
                Category: this.state.Category,
                Description: this.state.Description
        }
        console.log(data);
        axios({
                method:  'post'  ,
                url:  'http://localhost:3000/partner/add'  ,
                data:  data
        })
        .then(function  (response)  {
                console.log(response);
        })
        .catch(function  (error)  {
                console.log(error);
        }); 
    };

    handleChange  =  event  =>  {
        //event.target  will  end  up  being  the  input  element  itself.  And  we  want  to  pull  off  the  'name  and  value'
        const  target  =  event.target;
        const  value  =  target.value;
        const  name  =  target.name;
        this.setState({
                [name]:  value
            });
    };

    handleCheckbox  =  event  =>  {
        const{name,value}  =  event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value])}) }//语法:this.state[name]
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))})
        }
    }

    updateflag (val) {
        this.setState({
            flag: val,
        })
        console.log(this.state.flag)
    }

    render() {
        const { Area, First_Name, Last_Name, Mobile, Email, BName, Address, City, PostalCode, Category, Description, flag } = this.state;
        const ownStyle={
            width: 'calc(100% - 10px)',
            height: '45px',
            margin: '15px 0',
            backgroundColor: '#ffffff'
        };
        const {code}=this.state;
        
        return(
            <div className='Form_input'>

            <form className='JoinUs' onSubmit={this.handleSubmit}>

                <span className='fh_partner_label'>Area</span><span className='ft_required_mark'>*</span>
                <br/>
                <select
                    className='ft_partner_select'
                    name='Area'
                    value={Area}
                    onChange={this.handleChange}
                    style={{width: '242px', 
                            background: 'white',
                            margin: '10px 0 35px 0'
                            }}
                >
                    <option value="Great Vancouver">Great Vancouver</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Edmonton">Edmonton</option> 
                    <option value="Montreal">Montreal</option>
                    <option value="Toronto">Toronto</option> 
                    <option value="Seattle">Seattle</option>
                    <option value="New York">New York</option>
                </select>
                <br />
                
                <span className='fh_partner_label'>Name</span><span className='ft_required_mark'>*</span><br/>
                    <div className='ft_partner_single_row'>
                        <div>
                            <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='First_Name' value={First_Name} onChange={this.handleChange} placeholder='First Name' size='large'></Input>
                            {this.validator.message('First Name', this.state.First_Name, 'required','',{
                                required: 'First name is required',
                            })}
                        </div>
                        <div>
                            <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='Last_Name' value={Last_Name} onChange={this.handleChange} placeholder='Last Name' size='large'></Input>
                            {this.validator.message('Last Name', this.state.Last_Name, 'required','',{
                                required: 'Last name is required',
                            })}
                        </div>
                    </div>
                <div style={{padding: '0 0 35px 0'}} />
                
                <span className='fh_partner_label'>Phone</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Mobile' value={Mobile} onChange={this.handleChange} placeholder='Phone Number' size='large'></Input>
                    {this.validator.message('Mobile', this.state.Mobile, 'required|phone','',{
                        required: 'Phone number is required',
                    })}
                <div style={{padding: '0 0 35px 0'}} />
                
                <span className='fh_partner_label'>Email</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Email' value={Email} onChange={this.handleChange} placeholder='Email Address' size='large'></Input>
                    {this.validator.message('Email', this.state.Email, 'required|email','',{
                        required: 'Email address is required',
                    })}
                <div style={{padding: '0 0 35px 0'}} />

                <span className='fh_partner_label'>Business Name</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='BName' value={BName} onChange={this.handleChange} placeholder='Business Name' size='large'></Input>
                    {this.validator.message('Business Name', this.state.BName, 'required','',{
                        required: 'Business name is required',
                    })}
                <div style={{padding: '0 0 35px 0'}} />

                <span className='fh_partner_label'>Business Address</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Address' value={Address} onChange={this.handleChange} placeholder='Street Address' size='large'></Input>
                    {this.validator.message('Address', this.state.Address, 'required','',{})}
                    <div className='ft_partner_single_row'>
                        <div>
                            <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='City' value={City} onChange={this.handleChange} placeholder='City' size='large'></Input>
                            {this.validator.message('City', this.state.City, 'required','',{})}
                        </div>
                        <div>
                            <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='PostalCode' value={PostalCode} onChange={this.handleChange} placeholder='ZIP / Postal Code' size='large'></Input>
                            {this.validator.message('PostalCode', this.state.PostalCode, 'required','',{})}
                        </div>
                    </div>
                <div style={{padding: '0 0 35px 0'}} />

                <span className='fh_partner_label'>Business Category</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Category' value={Category} onChange={this.handleChange} placeholder='Business Category' size='large'></Input>
                    {this.validator.message('Category', this.state.Category, 'required','',{})}
                <div style={{padding: '0 0 35px 0'}} />
                    
                    <div>
                        <span className='fh_partner_label'>Description</span>
                        <br />
                        <div style={{'padding-top':'10px'}} />
                        <textarea className='ft_partner_textarea' name='Description' value={Description} onChange={this.handleChange}/>
                    </div>
                    

                    <div className='ft_partner_verificode'>
                        <span className='fh_partner_label'>Verification Code</span><span className='ft_required_mark'>*</span><br/>
                        <VerificationCode name='flag' value={flag} flagupdate={this.updateflag} />
                        {this.validator.message('Verification code', this.state.flag, 'required','',{
                            required:'Please input code correctly.'
                        })}
                    </div>
                    <hr />
                    
                    <button type='submit' className='ft_partner_submit_button'>Submit</button>
                </form>
            </div>
        );
    }
}
export default PAForm;