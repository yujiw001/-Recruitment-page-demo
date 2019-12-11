import React from 'react';
// import PostBlob from '../postblob/postblob.component';
import Verificode from '../vertification/vertication.component';
import Codebox from '../codeBox/codeBox.component';
import { Select, Input, Checkbox } from 'antd';
import axios from 'axios';

import './JoinUs.component.style.css';

class JoinUs extends React.Component  {
    constructor(){
        super();
        //1
        this.refreshCode=this.refreshCode.bind(this);
        this.GetDriverID=this.GetDriverID.bind(this);

        this.state ={
            DriverID: 0,
            Area: 'Great Vancouver',
            First_Name: '',
            Last_Name: '',
            Mobile:'',
            Address: '',
            City: '',
            PostalCode:'',
            DesiredArea:[],
            Transportation:[],
            AvailableTime:[],
            description:'at least 10 words',
            code:[],//this variable is used to store the vertification code
            selectedFile : null,
        }
    }

    refreshCode(){
        this.GetVerifiCode();
    }
    GetDriverID(){
        var self=this;
        axios({
            method: 'get' ,
            url: 'http://localhost:3000/driverid' ,
         })
         .then(function (response) {
             var target=JSON.stringify(response.data);
             var ans=JSON.parse(target)["MAX(id)"];
             console.log(ans);
             
             self.setState({DriverID:ans})
             return ans;
           })
         .catch(function (error) {
             console.log(error);
           });
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
      var test= this.GetDriverID();
      console.log("dasdsadsafadggedgwegewgewfweffwqf================================================="+test);
    }
    
    handleSubmit = async event =>{
        alert('Area name was submitted: ' + this.state.DesiredArea);
        event.preventDefault();
        var data = {
            Area: this.state.Area,
            First_Name: this.state.First_Name,
            Last_Name: this.state.Last_Name,
            Mobile: this.state.Mobile,
            Address: this.state.Address,
            City: this.state.City,
            PostalCode: this.state.PostalCode,
            description: this.state.description
        }
        var areadata = this.state.DesiredArea = {
            DriverID:this.state.DriverID,
            LAN_MARK:'E',
            DesiredArea:this.state.DesiredArea,
            
        };
        var timedata = this.state.AvailableTime = {
            DriverID:this.state.DriverID,
            LAN_MARK:'E',
            AvailableTime:this.state.AvailableTime,
        };
        var transportationdata = this.state.Transportation = {
            DriverID:this.state.DriverID,
            LAN_MARK:'E',
            Transportation:this.state.Transportation,
        };
        var filedata= this.state.selectedFile;
        const formData=new FormData();
        formData.append('file',filedata);
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
        axios({
            method: 'post',
            url:'http://localhost:3000/drivers/desiredarea',
            data: areadata
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
        axios({
            method: 'post',
            url:'http://localhost:3000/drivers/availabletime',
            data: timedata
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {
            console.log(error);
          });
        axios({
            method: 'post',
            url:'http://localhost:3000/drivers/transportation',
            data: transportationdata
        })
        .then(function (response) {
            console.log(response);
          })
        .catch(function (error) {   
            console.log(error);
          });
        axios({
            method: 'post' ,
            url :'http://localhost:3000/uploadfile',
            data:formData
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    };
    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0] 
        })
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

    handleCheckbox = event => {
        const{name,value} = event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value]) }, ()=>{
                console.log(this.state.DesiredArea)
            }) //语法:this.state[name]
            // console.log(this.state.DesiredArea)
        }   
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))} , ()=>{
                console.log(this.state.DesiredArea)
            })

        }
    }

    handleCancel = () => {
        this.setState({ visible: false });
      };

    render() {
        const { Area, First_Name, Last_Name, Address, City, PostalCode, Mobile, Description } = this.state;

        const ownStyle={
            width: 'calc(100% - 10px)',
            height: '45px',
            margin: '15px 0',
            backgroundColor: '#ffffff'
        };

        const { code } = this.state;
        
        return(
            <div className='Form_input'>
                <form className='JoinUs' onSubmit={this.handleSubmit}>

                    <span className='fh_driver_label'>Area</span><span className='required_mark'>*</span>
                    <br/>
                    <select
                        className='ft_driver_select'
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

                    <span className='fh_driver_label'>Name</span><span className='required_mark'>*</span><br/>
                    <div className='ft_driver_single_row'>
                        <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='First_Name' value={First_Name} onChange={this.handleChange} size='large' required placeholder='First Name' />
                        <Input style={{'max-width':'242px', margin: '10px 0 35px 0'}} name='Last_Name' value={Last_Name} onChange={this.handleChange} size='large' required placeholder='Last Name' />
                    </div>

                    <span className='fh_driver_label'>Phone</span><span className='required_mark'>*</span>
                    <Input style={{'max-width':'497px', margin: '10px 0 35px 0'}} name='Mobile' value={Mobile} onChange={this.handleChange} size='large' required placeholder='Phone Number' />

                    <span className='fh_driver_label'>Address</span><span className='required_mark'>*</span>
                    <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Address' value={Address} onChange={this.handleChange} size='large' required placeholder='Street Address' />
                    <div className='ft_driver_single_row'>
                        <Input style={{'max-width':'242px', margin: '13px 0 35px 0'}} name='City' value={City} onChange={this.handleChange} size='large' required placeholder='City' />
                        <Input style={{'max-width':'242px', margin: '13px 0 35px 0'}} name='PostalCode' value={PostalCode} onChange={this.handleChange} size='large' required placeholder='ZIP / Postal Code' />
                    </div>

                    <div>
                        <span className='fh_driver_label'>Desired schedule area</span><span className='required_mark'>*</span>
                        <span className='ft_driver_instruction'>Choose at least 1</span>
                        
                        <div className='ft_driver_area_checkbox_group'>
                            <div className='ft_driver_single_col'>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Metro" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Metro</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Richmond" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Richmond</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Lougheed" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Lougheed</span>
                            </Checkbox>
                            </div>
                            <div className='ft_driver_single_col'>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Coquitlam" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Coquitlam</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Surrey" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Surrey</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Downtown" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Downtown</span>
                                </Checkbox>
                            </div>
                            <div className='ft_driver_single_col'>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="New West" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>New West</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Vancouver" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Vancouver</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="DesiredArea" value="Hasting" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Hasting</span>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div style={{padding:'17.5px 0'}} />
                    <div>
                        <span className='fh_driver_label'>Transportation</span><span className='required_mark'>*</span>
                        <span className='ft_driver_instruction'>Choose at least 1</span>
                        <br/>
                        <div className='ft_driver_transportation_checkbox_group'>
                            <div className='ft_driver_single_col' style={{height:'44px'}}>
                                <Checkbox style={{margin:0, padding:0}} name="Transportation" value="Car" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Car(self-provided)</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:'10px 0 0 0'}} name="Transportation" value="Electric Motorbike" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Electric Motorbike(rent)</span>
                                </Checkbox>
                            </div>
                            <Checkbox style={{margin:0, padding:0}} name="Transportation" value="Motorbike" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'>Motorbike(self-provided)</span>
                            </Checkbox>
                            
                        </div>
                    </div>
                    <div style={{padding:'17.5px 0'}} />
                    <div>
                        <span className='fh_driver_label'>Operating hours</span><span className='required_mark'>*</span>
                        <span className='ft_driver_instruction'>Choose at least 4</span>
                        <br/>
                        <div className='ft_driver_hour_checkbox_group'>
                            <div className='ft_driver_single_col' style={{height:'134px'}}>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="monday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Mon 11am - 5pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="tuesday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Tue 11am - 5pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="wednesday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Wed 11am - 5pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="thursday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Thu 11am - 5pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="friday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Fri 11am - 5pm</span>
                                </Checkbox>
                            </div>
                            <div className='ft_driver_single_col' style={{height:'134px'}}>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="saturday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Sat 11am - 5pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="sunday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Sun 11am - 5pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="monday_5_11" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Mon 5am - 11pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="tuesday_5_11" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Tue 5am - 11pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="wednesday_5_11" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Wed 5am - 11pm</span>
                                </Checkbox>
                            </div>
                            <div className='ft_driver_single_col' style={{height:'104px'}}>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="thursday_5_11" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Thu 5am - 11pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="friday_5_11" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Fri 5am - 11pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="saturday_11_5" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Sat 5am - 11pm</span>
                                </Checkbox>
                                <Checkbox style={{margin:0, padding:0}} name="AvailableTime" value="sunday_5_11" onClick={this.handleCheckbox}>
                                    <span className='ft_driver_box_label'>Sun 5am - 11pm</span>
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div style={{padding:'16px 0'}} />
                    <div>
                        <span className='fh_driver_label'>Description</span>
                        <br />
                        <div style={{'padding-top':'10px'}} />
                        <textarea className='ft_driver_textarea' name='Description' value={Description} onChange={this.handleChange}/>
                    </div>

                        {/* <PostBlob>上传简历</PostBlob> */}
                        {/* <input type="file" name="file" onChange={this.onChangeHandler} /> */}
                        <div className='ft_driver_verificode' /* style={{width:'200px',height:'auto'}} */>
                            <div style={{width:'150px', height:'auto'}}>
                                <Verificode ownStyle={ownStyle} onGetRefresh={this.refreshCode} data={code}></Verificode>
                            </div>
                            <div style={{width:'200px',height:'auto'}}>
                                <Codebox />
                            </div>
                        </div>
                    <hr />
                    
                    <button type='submit' className='ft_driver_submit_button'>Submit</button>       
                    
                </form>
            </div>
        );
    }
}
export default JoinUs;