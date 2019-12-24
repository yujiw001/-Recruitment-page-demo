import React  from  'react';
import VerificationCode from '../verificationcode/verification/verification.component';  
import ReactValidator from './react-validator';
import SuccessModal from '../../home/recruitment/component/successModal/successModal.component';
import { Input }  from  'antd';
import  axios  from  'axios';
import { FormattedMessage } from 'react-intl';

import './paform.component.style.css';

class  PAForm  extends  React.Component    {
        constructor(){
                super();
                //1
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
                        modalVisible: false,
                        formVisible: true,
                        flag: '',                
                    }
                this.updateflag = this.updateflag.bind(this);
                this.GetVisibility=this.GetVisibility.bind(this);
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

    componentWillMount() {
        this.validator = new ReactValidator();
    }

        handleSubmit  =  async  event  =>{
            if( this.validator.allValid() ){
                this.props.getformVisibility(false)
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
    }

    showModal = () => {
        if (this.validator.allValid()) {
            this.setState({
                modalVisible: true,
            });
        }
    }

    GetVisibility(visibility){
        this.setState({modalVisible:visibility})
    }

    render() {
        const { Area, First_Name, Last_Name, Mobile, Email, BName, Address, City, PostalCode, Category, Description, flag } = this.state;
        
        return(
            <div className='Form_input'>
                {
                    this.state.formVisible?
                    <div>
                        <p className='ft_partner_modal_title'><FormattedMessage id="fd_partner_become_title"/></p>
                        <hr style={{'padding-bottom':'10px'}} />
                    </div>:null
                }
                {
                    this.state.formVisible?
                    <form onSubmit={this.handleSubmit}>
                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_area"/></span><span className='ft_required_mark'>*</span>                      
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
                        
                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_name"/></span><span className='ft_required_mark'>*</span><br/>
                            <div className='ft_partner_single_row'>
                            <div>
                                    <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='First_Name' value={First_Name} onChange={this.handleChange} placeholder='First Name' size='large'></Input>
                                    {this.validator.message('First Name', this.state.First_Name, 'required','',{})}
                                </div>
                                <div>
                                    <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='Last_Name' value={Last_Name} onChange={this.handleChange} placeholder='Last Name' size='large'></Input>
                                    {this.validator.message('Last Name', this.state.Last_Name, 'required','',{})}
                                </div>                            
                            </div>
                        <div style={{padding: '0 0 35px 0'}} />
                        
                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_phone"/></span><span className='ft_required_mark'>*</span><br/>
                            <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Mobile' value={Mobile} onChange={this.handleChange} placeholder='Phone Number' size='large'></Input>
                            {this.validator.message('Mobile', this.state.Mobile, 'required|phone','',{})}
                        <div style={{padding: '0 0 35px 0'}} />

                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_email"/></span><span className='ft_required_mark'>*</span><br/>
                            <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Email' value={Email} onChange={this.handleChange} placeholder='Email Address' size='large'></Input>
                            {this.validator.message('Email', this.state.Email, 'required|email','',{})}
                        <div style={{padding: '0 0 35px 0'}} />

                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_busname"/></span><span className='ft_required_mark'>*</span><br/>
                            <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='BName' value={BName} onChange={this.handleChange} placeholder='Business Name' size='large'></Input>
                            {this.validator.message('Business Name', this.state.BName, 'required','',{})}
                        <div style={{padding: '0 0 35px 0'}} />

                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_busadr"/></span><span className='ft_required_mark'>*</span><br/>
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

                        <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_buscat"/></span><span className='ft_required_mark'>*</span><br/>
                            <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Category' value={Category} onChange={this.handleChange} placeholder='Business Category' size='large'></Input>
                            {this.validator.message('Category', this.state.Category, 'required','',{})}
                        <div style={{padding: '0 0 35px 0'}} />

                        <div>
                            <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_Desc"/></span>
                            <br />
                            <div style={{'padding-top':'10px'}} />
                            <textarea className='ft_partner_textarea' name='Description' value={Description} onChange={this.handleChange}/>
                        </div>

                        <div className='ft_partner_verificode'>
                            <span className='fh_partner_label'><FormattedMessage id="fd_partner_become_inputcode"/></span><span className='ft_required_mark'>*</span><br/>
                            <VerificationCode flagupdate={this.updateflag} />
                            {this.validator.message('Verification code', this.state.flag, 'required','',{
                                required:'Please input code correctly.'
                            })}
                        </div>
                        <hr />
                        
                        <button type='submit' onClick={this.showModal} className='ft_driver_submit_button'>Submit</button>
                        {this.state.modalVisible?<SuccessModal getVisibility={this.GetVisibility}/>:null}  
                    </form>:null
                }
            </div>
        );
    }
}
export default PAForm;