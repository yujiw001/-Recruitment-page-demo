import  React  from  'react';
import VerificationCode from '../verificationcode/verification/verification.component';
import  { Input }  from  'antd';
import  axios  from  'axios';

import './adform.component.style.css';

class  ADForm  extends  React.Component    {
        constructor(){
                super();
                //1
                this.refreshCode=this.refreshCode.bind(this);
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
                        code:[]  //this  variable  is  used  to  store  the  vertification  code
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

        handleSubmit  =  async  event  =>{
                alert('Area  name  was  submitted:  '  +  this.state.Area);
                event.preventDefault();
                var  data  =  {
                        Country:  this.state.Country,
                        Area:  this.state.Area,
                        First_Name:  this.state.First_Name,
                        Last_Name:this.state.Last_Name,
                        Mobile:this.state.Mobile,
                        Email:  this.state.Email,
                        BName:  this.state.BName,
                        Address:this.state.Address,
                        City:this.state.City,
                        PostalCode:this.state.PostalCode,
                        Category:  this.state.Category,
                        Description:this.state.Description
                }
                console.log(data);
                axios({
                      method:  'post'  ,
                      url:  'http://localhost:3000/ad/add'  ,
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

    render() {
        const { Area, First_Name, Last_Name, Mobile, Email, BName, Address, City, PostalCode, Category, Description } = this.state;
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

                <span className='fh_ad_label'>Area</span><span className='ft_required_mark'>*</span>
                <br/>
                <select
                    className='ft_ad_select'
                    name='Area'
                    value={Area}
                    onChange={this.handleChange}
                    style={{width: '242px', 
                            background: 'white',
                            margin: '10px 0 35px 0'
                            }}
                >
                    <option value="Great Vancouver">Great Vancouver</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Toronto">Toronto</option> 
                </select>
                <br />
                
                <span className='fh_ad_label'>Name</span><span className='ft_required_mark'>*</span><br/>
                    <div className='ft_ad_single_row'>
                        <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='First_Name' value={First_Name} onChange={this.handleChange} required placeholder='First Name' size='large'></Input>
                        <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='Last_Name' value={Last_Name} onChange={this.handleChange} required placeholder='Last Name' size='large'></Input>
                    </div>
                
                <span className='fh_ad_label'>Phone</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 35px 0'}} name='Mobile' value={Mobile} onChange={this.handleChange} required placeholder='Phone Number' size='large'></Input>
                
                <span className='fh_ad_label'>Email</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 35px 0'}} name='Email' value={Email} onChange={this.handleChange} required placeholder='Email Address' size='large'></Input>
                
                <span className='fh_ad_label'>Business Name</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 35px 0'}} name='BName' value={BName} onChange={this.handleChange} required placeholder='Business Name' size='large'></Input>

                <span className='fh_ad_label'>Business Address</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Address' value={Address} onChange={this.handleChange} required placeholder='Street Address' size='large'></Input>
                    <div className='ft_ad_single_row'>
                        <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='City' value={City} onChange={this.handleChange} required placeholder='City' size='large'></Input>
                        <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='PostalCode' value={PostalCode} onChange={this.handleChange} required placeholder='ZIP / Postal Code' size='large'></Input>
                    </div>
                <span className='fh_ad_label'>Business Category</span><span className='ft_required_mark'>*</span><br/>
                    <Input style={{'max-width':'497px', margin: '10px 0 35px 0'}} name='Category' value={Category} onChange={this.handleChange} placeholder='Business Category' required size='large'></Input>
                    
                    <div>
                        <span className='fh_ad_label'>Description</span>
                        <br />
                        <div style={{'padding-top':'10px'}} />
                        <textarea className='ft_ad_textarea' name='Description' value={Description} onChange={this.handleChange}/>
                    </div>

                    <div className='ft_ad_verificode'>
                        <span className='fh_ad_label'>Verification Code</span><span className='ft_required_mark'>*</span><br/>
                        <VerificationCode />
                    </div>
                    <hr />
                    
                    <button type='submit' className='ft_ad_submit_button'>Submit</button>
                </form>
            </div>
        );
    }
}
export default ADForm;