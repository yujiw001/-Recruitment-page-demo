import React from 'react';
import FormInput from '../form_input/formInput.component';
// import PostBlob from '../postblob/postblob.component';
import Verificode from '../vertification/vertication.component';
import Codebox from '../codeBox/codeBox.component';
import { Select, Input, Form } from 'antd';

import axios from 'axios';
class JoinUs extends React.Component  {
    constructor(){
        super();
        //1
        this.refreshCode=this.refreshCode.bind(this);
        this.GetDriverID=this.GetDriverID.bind(this);

        this.state ={
            DriverID: 0,
            Area: '',
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
            selectedFile : null
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
        alert('Area name was submitted: ' + this.state.Area);
        event.preventDefault();
        var data = {
            Country: this.state.Country,
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

    render() {
        const { Country, Area, First_Name, Last_Name, Address, City, PostalCode, Mobile, Description } = this.state;
        const ownStyle={
            width: 'calc(100% - 10px)',
            height: '45px',
            margin: '15px 0',
            backgroundColor: '#ffffff'
        };
        const { code } = this.state;
        const { Option } = Select;
        const options = [
            {value: 'Los Angeles', label: 'Los Angeles'},
            {value:'Vancouver', label: 'Vancouver'},
            {value:'Toronto', label: 'Toronot'}
        ];
        
        return(
            <div className='Form_input'>
                
                <h1>Area</h1>
                <select
                    name='Area'
                    value={Area}
                    onChange={this.handleChange}
                    style={{ width: '242px', 
                             background: 'white'
                            }}
                    placeholder='Choose your area'
                >
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Toronto">Toronto</option> 
                </select>

                <form className='JoinUs' onSubmit={this.handleSubmit}>

                    <span>Name</span>
                    <Input type='text' name='First_Name' value={First_Name} onChange={this.handleChange} label='First Name' required></Input>
                    <Input type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} label='Last Name' required></Input>
                    <span>Address</span>
                    <Input type='text' name='Address' value={Address} onChange={this.handleChange} label='Street Address' required></Input>
                    <Input type='text' name='City' value={City} onChange={this.handleChange} label='City' required></Input>
                    <Input type='text' name='PostalCode' value={PostalCode} onChange={this.handleChange} label='ZIP/Postal Code' required></Input>
                    <span>Phone</span>
                    <Input type='text' name='Mobile' value={Mobile} onChange={this.handleChange} label='手机' required></Input>

                    <div>
                        工作地点：<br/>
                        <label><input type="checkbox" name="DesiredArea" value="Burnaby"
                                      onClick={this.handleCheckbox}/>Burnaby</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="West Vancouver"
                                      onClick={this.handleCheckbox}/>West Vancouver</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="White Rock"
                                      onClick={this.handleCheckbox}/>White Rock</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Richmond"
                                      onClick={this.handleCheckbox}/>Richmond</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="North Vancouver"
                                      onClick={this.handleCheckbox}/>North Vancouver</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Delta"
                                      onClick={this.handleCheckbox}/>Delta</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Vancouver"
                                      onClick={this.handleCheckbox}/>Vancouver</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Port Moody"
                                      onClick={this.handleCheckbox}/>Port Moody</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Maple Ridge"
                                      onClick={this.handleCheckbox}/>Maple Ridge</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Coquitlam"
                                      onClick={this.handleCheckbox}/>Coquitlam</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Port Coquitlam"
                                      onClick={this.handleCheckbox}/>Port Coquitlam</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Anmore"
                                      onClick={this.handleCheckbox}/>Anmore</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Surrey"
                                      onClick={this.handleCheckbox}/>Surrey</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Langley"
                                      onClick={this.handleCheckbox}/>Langley</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="New Westminster"
                                      onClick={this.handleCheckbox}/>New Westminster</label><br/>
                        
                    </div>

                    <div>
                        Transportation：<br/>
                        <label><input type="checkbox" name="Transportation" value="Car"
                                      onClick={this.handleCheckbox}/>Car(self-provided)</label><br/>
                        <label><input type="checkbox" name="Transportation" value="Motorbike"
                                      onClick={this.handleCheckbox}/>Motorbike(self-provided)</label><br/>
                        <label><input type="checkbox" name="Transportation" value="Electric Motorbike"
                                      onClick={this.handleCheckbox}/>Electric Motorbike(rent)</label><br/>
                    </div>

                    <div>
                        工作时间：<br/>
                        <label><input type="checkbox" name="AvailableTime" value="monday_11_5"
                                      onClick={this.handleCheckbox}/>周一 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="tuesday_11_5"
                                      onClick={this.handleCheckbox}/>周二 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="wednesday_11_5"
                                      onClick={this.handleCheckbox}/>周三 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="thursday_11_5"
                                      onClick={this.handleCheckbox}/>周四 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="friday_11_5"
                                      onClick={this.handleCheckbox}/>周五 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="saturday_11_5"
                                      onClick={this.handleCheckbox}/>周六 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="sunday_11_5"
                                      onClick={this.handleCheckbox}/>周日 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="monday_5_11"
                                      onClick={this.handleCheckbox}/>周一 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="tuesday_5_11"
                                      onClick={this.handleCheckbox}/>周二 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="wednesday_5_11"
                                      onClick={this.handleCheckbox}/>周三 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="thursday_5_11"
                                      onClick={this.handleCheckbox}/>周四 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="friday_5_11"
                                      onClick={this.handleCheckbox}/>周五 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="AvailableTime" value="saturday_5_11"
                                      onClick={this.handleCheckbox}/>周六 5am - 11pm</label><br/>
                    </div>

                    <div>
                        <label>
                            <textarea name='Description' value={Description} onChange={this.handleChange}/>
                        </label>
                    </div>

                        {/* <PostBlob>上传简历</PostBlob> */}
                        <input type="file" name="file" onChange={this.onChangeHandler} />
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
export default JoinUs;