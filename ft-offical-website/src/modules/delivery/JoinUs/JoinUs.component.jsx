import React from 'react';
import VerificationCode from '../verificationcode/verification/verification.component';
import AreaCheckBox from './areacheckbox.component';
import ReactValidator from './react-validator';
import SuccessModal from '../../home/recruitment/component/successModal/successModal.component';
import { Input, Checkbox, Row, Col } from 'antd';
import axios from 'axios';

import './JoinUs.component.style.css';

import GlobalArea from './areadata';
import { FormattedMessage} from 'react-intl';

const CheckboxGroup = Checkbox.Group;

class JoinUs extends React.Component  {
    constructor(){
        super();
        //1
        this.GetDriverID=this.GetDriverID.bind(this);
        this.GetTowns=this.GetTowns.bind(this);
        this.GetAreaStageChange=this.GetAreaStageChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.updateflag = this.updateflag.bind(this);
        this.GetVisibility=this.GetVisibility.bind(this);
        this.state ={
            DriverID: 0,
            Area: 'Great Vancouver',
            Town:GlobalArea[0],
            First_Name: '',
            Last_Name: '',
            Mobile:'',
            Address: '',
            City: '',
            PostalCode:'',
            DisplayArea:GlobalArea,
            AreaCode:0,
            DesiredArea:[],
            Transportation:[],
            AvailableTime:[],
            description:'',
            modalVisible: false,
            formVisible:true,
            flag: '',
        }
    }
    DealwithCheckbox =() =>{
        this.resetcheckbox();
        this.handleSelectChange();
    }
    resetcheckbox = () =>{

    }
    showModal = () => {
        if( this.validator.allValid() ){
            this.setState({
                modalVisible: true,
              });
        }
      };
    
      GetTowns= ()=> {
        switch(this.state.Area){
            case "Great Vancouver":
                this.setState({Town:this.state.DisplayArea[0]});break;
            case "Calgary":
                this.setState({Town:this.state.DisplayArea[1]});break;
            case "New York":
                this.setState({Town:this.state.DisplayArea[2]});break;
            case "Toronto":
                this.setState({Town:this.state.DisplayArea[3]});break;
            case "Edmonton":
                this.setState({Town:this.state.DisplayArea[4]});break;
            case "Seattle":
                this.setState({Town:this.state.DisplayArea[5]});break;
            case "Montreal":
                this.setState({Town:this.state.DisplayArea[6]});break;
        }
    }

    handleSelectChange = async event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(
            {[name]: value}, 
            ()=>{this.GetTowns()},
          );

    };


    GetDriverID(){
        var self=this;
        axios({
            method: 'get' ,
            url: 'http://localhost:3000/driverid' ,
         })
         .then(function (response) {
             //  var target=JSON.stringify(response.data);
             //  var ans=JSON.parse(target)["MAX(id)"];
             var ans= response.data["MAX(id)"];
             /* console.log(typeof(ans)); */
             
             self.setState({DriverID:ans+1})
             return ans;
           })
         .catch(function (error) {
             console.log(error);
           });
    }

    componentDidMount()
    {
      var test= this.GetDriverID();
    }
    
    componentWillMount() {
        this.validator = new ReactValidator();
    }

    handleSubmit = async event =>{
        event.preventDefault();
        if( this.validator.allValid() ){
            this.props.getformVisibility(false)

        // else {
        //     event.stopPropagation(); 
        //     event.preventDefault();
        //     this.validator.showMessages();
        //     this.forceUpdate();
            
        // }

        // event.preventDefault();
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
        // alert('提交成功');
     }
     else {
            this.validator.showMessages();
            this.forceUpdate();
            
        } 
    };
    
    handleChange = async event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    };

    GetAreaStageChange(preferredArea){
        this.setState({DesiredArea:this.state.DesiredArea.concat(preferredArea)});
    }
    
    GetVisibility(visibility){
        this.setState({modalVisible:visibility})
    }

    handleCheckbox = event => {
        const{name,value} = event.target;
        if(!this.state[name].includes(value)){
            this.setState({[name]:this.state[name].concat([value]) }, ()=>{
                /* console.log(this.state.DesiredArea) */
            }) //语法:this.state[name]
            // console.log(this.state.DesiredArea)
        }   
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))} , ()=>{
                /* console.log(this.state.DesiredArea) */
            })

        }
    }

    handleCancel = () => {
        this.setState({ visible: false });
      };

    updateflag (val) {
        this.setState({
            flag: val,
        })
    }

    onChange = DesiredArea => {
        this.setState({
            DesiredArea,
        });
      };

    render() {
        const { Area, First_Name, Last_Name, Address, City, PostalCode, Mobile, description } = this.state;
        const checked = false /* 每次re-render的时候，这个值会被付给checkbox的checked属性，完成重置；setState in handleSelctChange */
        return(
            <div className='Form_input'>
                {this.state.formVisible?
                  <div>
                    <p className='ft_driver_modal_title'><FormattedMessage id="fd_deliver_become_title"/></p>
                    <hr style={{'padding-bottom':'10px'}}/>
                  </div>:null}
             {
               this.state.formVisible?
                <form className='JoinUs' onSubmit={this.handleSubmit}>

                    <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_area"/></span><span className='ft_required_mark'>*</span>
                    <br/>
                    <select
                        className='ft_driver_select'
                        name='Area'
                        value={Area}
                        onChange={this.handleSelectChange}
                        // onClick={()=>{this.handleClick;this.GetDriverID()}}
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

                    <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_name"/></span><span className='ft_required_mark'>*</span><br/>
                    <div className='ft_driver_single_row'>
                        <div>
                            <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='First_Name' value={First_Name} onChange={this.handleChange} size='large' placeholder='First Name' />
                            {this.validator.message('First Name', this.state.First_Name, 'required','',{})} 
                        </div>
                        <div>
                            <Input style={{'width':'242px', margin: '10px 0 0 0'}} name='Last_Name' value={Last_Name} onChange={this.handleChange} size='large' placeholder='Last Name' />
                            {this.validator.message('Last Name', this.state.Last_Name, 'required','',{})}
                        </div>                    
                    </div>

                    <div style={{padding: '0 0 35px 0'}} />

                    <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_phone"/></span><span className='ft_required_mark'>*</span>
                        <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Mobile' value={Mobile} onChange={this.handleChange} size='large' placeholder='Phone Number' />
                        {this.validator.message('Mobile', this.state.Mobile, 'required|phone','',{})} 
                    <div style={{padding: '0 0 35px 0'}} />

                    <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_address"/></span><span className='ft_required_mark'>*</span>
                        <Input style={{'max-width':'497px', margin: '10px 0 0 0'}} name='Address' value={Address} onChange={this.handleChange} size='large' placeholder='Street Address' />
                        {this.validator.message('Address', this.state.Address, 'required','',{})}
                        <div className='ft_driver_single_row'>
                            <div>
                                <Input style={{'width':'242px', margin: '13px 0 0 0'}} name='City' value={City} onChange={this.handleChange} size='large' placeholder='City' />
                               {this.validator.message('City', this.state.City, 'required','',{})}
                            </div>
                            <div>
                                <Input style={{'width':'242px', margin: '13px 0 0 0'}} name='PostalCode' value={PostalCode} onChange={this.handleChange} size='large' placeholder='ZIP / Postal Code' />
                               {this.validator.message('PostalCode', this.state.PostalCode, 'required','',{})}
                            </div>
                        </div>

                    <div style={{padding: '0 0 35px 0'}} />

                    <div>
                        <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_schedule_title"/></span><span className='ft_required_mark'>*</span>
                        <span className='ft_driver_instruction'>Choose at least 1</span>
                        <div className='ft_driver_area_checkbox_group'>
                            <CheckboxGroup
                                style={{'max-width':'463px', margin:'auto','display':'flex', 'justify-content': 'space-between', 'flex-wrap': 'wrap'}}
                                /* options={this.state.Town} */
                                value={this.state.DesiredArea}
                                onChange={this.onChange}
                            >
                                {
                                    this.state.Town.map(data => (
                                        <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'200px'}}  value={data} /* onClick={this.handleCheckbox} */ /* checked={checked}*/ >
                                            <span className='ft_driver_box_label'>{data}</span>
                                        </Checkbox>
                                    ))
                                }
                            </CheckboxGroup>

                            



                            </div>
                        {this.validator.message('DesiredArea', this.state.DesiredArea, 'min:1','',{
                                min: 'Please at least choose 1 desired area',
                        })} 
                    </div>

                    <div style={{padding:'9.5px 0'}} />

                    <div>
                        <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_trans_title"/></span><span className='ft_required_mark'>*</span>
                        <span className='ft_driver_instruction'>Choose at least 1</span>
                        <br/>
                        <div className='ft_driver_transportation_checkbox_group'>
                            <Checkbox type='checkbox' style={{margin:0, padding:'0 0 16px 0'}} name="Transportation" value="Car" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_trans_name1"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'200px'}} name="Transportation" value="Motorbike" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_trans_name2"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'200px'}} name="Transportation" value="Electric Motorbike" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_trans_name3"/></span>
                            </Checkbox>
                        </div>
                        {this.validator.message('Transportation', this.state.Transportation, 'min:1','',{
                                min: 'At least choose 1 transportation method',
                        })}
                    </div>

                    <div style={{padding:'9.5px 0'}} />

                    <div>
                        <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_hours_title"/></span><span className='ft_required_mark'>*</span>
                        <span className='ft_driver_instruction'>Choose at least 4</span>
                        <br/>
                        <div className='ft_driver_hour_checkbox_group'>   
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="monday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time01"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="tuesday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time02"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="wednesday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time03"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="thursday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time04"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="friday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time05"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="saturday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time06"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="sunday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time07"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="monday_5_11" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time08"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="tuesday_5_11" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time09"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="wednesday_5_11" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time10"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="thursday_5_11" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time11"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="friday_5_11" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time12"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="saturday_11_5" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time13"/></span>
                            </Checkbox>
                            <Checkbox style={{margin:0, padding:'0 0 16px 0', width:'154px'}} name="AvailableTime" value="sunday_5_11" onClick={this.handleCheckbox}>
                                <span className='ft_driver_box_label'><FormattedMessage id="fd_deliver_become_hours_time14"/></span>
                            </Checkbox>
                        </div>
                        {this.validator.message('AvailableTime', this.state.AvailableTime, 'min:4','',{
                                min: 'At least choose 4 operation hours',
                        })} 
                    </div>

                    <div style={{padding:'8px 0'}} />

                    <div>
                        <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_desc"/></span>
                        <br />
                        <div style={{'padding-top':'10px'}} />
                        <textarea className='ft_driver_textarea' name='description' value={description} onChange={this.handleChange}/>
                    </div>

                    <div className='ft_driver_verificode'>
                        <span className='ft_driver_label'><FormattedMessage id="fd_deliver_become_inputcode"/></span><span className='ft_required_mark'>*</span><br/>
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
export default JoinUs;