import React from 'react';
import FormInput from '../form_input/formInput.component';
import PostBlob from '../postblob/postblob.component';
import ReactCodeInput from 'react-verification-code-input';
import Verificode from '../vertification/vertication.component';
import Vcodebox from '../codeBox/codeBox.component';
import Codebox from '../codeBox/codeBox.component';
import {Select} from 'antd';
class JoinUs extends React.Component  {
    constructor(){
        super();
        //1
        this.refreshCode=this.refreshCode.bind(this);
        this.state ={
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
            description:'',
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
        event.preventDefault();
    };

    handleChange = event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const{name,value} = event.target;
        this.setState({[name]:value});
    };
    handleCheckbox = event => {
        const{name,value} = event.target;
        if(!this.state[name].include(value)){
            this.setState({[name]:this.state[name].concat([value])}) }//语法:this.state[name]
        else{
            this.setState({[name]:this.state[name].filter(checkbox => (checkbox != value))})
        }
    }

    render() {
        const {Area,First_Name,Last_Name,Address,City,PostalCode,Mobile,WorkType} = this.state;
        const ownStyle={
            width: 'calc(100% - 10px)',
            height: '45px',
            margin: '15px 0',
            backgroundColor: '#ffffff'
        };
        const {code}=this.state;
        return(
            <div className='Form_input'>
                <Select>
                    <Select.Option name='Area' value="LA">LA</Select.Option>
                    <Select.Option name='Area' value="Vancouver">Vancouver</Select.Option>
                    <Select.Option name='Area' value="Toronto">Toronto</Select.Option>
                </Select>
                <form className='JoinUs' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='First_Name' value={First_Name} onChange={this.handleChange} label='First Name' required></FormInput>
                    <FormInput type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} label='Last Name' required></FormInput>
                    <FormInput type='text' name='Address' value={Address} onChange={this.handleChange} label='Street Address' required></FormInput>
                    <FormInput type='text' name='City' value={City} onChange={this.handleChange} label='City' required></FormInput>
                    <FormInput type='text' name='PostalCode' value={PostalCode} onChange={this.handleChange} label='ZIP/Postal Code' required></FormInput>
                    <FormInput type='text' name='Mobile' value={Mobile} onChange={this.handleChange} label='手机' required></FormInput>
                    {/* <label><input type="radio" name='WorkType' value='FullTime' onChange={this.handleChange} />全职</label>
                    <label><input type="radio" name='WorkType' value='PartTime' onChange={this.handleChange} />兼职</label> */}
                    <div>
                        工作地点：<br/>
                        <label><input type="checkbox" name="DesiredArea" value="Burnaby"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Burnaby</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="West Vancouver"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>West Vancouver</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="White Rock"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>White Rock</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Richmond"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Richmond</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="North Vancouver"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>North Vancouver</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Delta"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Delta</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Vancouver"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Vancouver</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Port Moody"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Port Moody</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Maple Ridge"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Maple Ridge</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Coquitlam"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Coquitlam</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Port Coquitlam"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Port Coquitlam</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Anmore"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Anmore</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Surrey"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Surrey</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="Langley"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>Langley</label><br/>
                        <label><input type="checkbox" name="DesiredArea" value="New Westminster"
                                      Ischecked={this.state.Defaultchecked} onClick={this.handleCheckbox}/>New Westminster</label><br/>
                        
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
                    <div><textarea /></div>
                        <PostBlob>上传简历</PostBlob>
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