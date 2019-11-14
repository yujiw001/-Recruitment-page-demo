import React from 'react';
import FormInput from '../form_input/formInput.component';
import PostBlob from '../postblob/postblob.component';

class JoinUs extends React.Component  {
    constructor(){
        super();
        this.state ={
            First_Name: '',
            Last_Name: '',
            Address: '',
            City: '',
            PostalCode:'',
            Mobile:'',
            WorkType:'',
            AvailableTime:[]
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
    };

    handleChange = event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const{name,value} = event.target;
        this.setState({[name]:value});
    };

    render() {
        const {First_Name,Last_Name,Address,City,PostalCode,Mobile,WorkType} = this.state;
        return(
            <div className='Form_input'>
                <form className='JoinUs' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='First_Name' value={First_Name} onChange={this.handleChange} label='姓名' required></FormInput>
                    <FormInput type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} label='住址' required></FormInput>
                    <FormInput type='text' name='Address' value={Address} onChange={this.handleChange} label='Street Address' required></FormInput>
                    <FormInput type='text' name='City' value={City} onChange={this.handleChange} label='City' required></FormInput>
                    <FormInput type='text' name='PostalCode' value={PostalCode} onChange={this.handleChange} label='ZIP/Postal Code' required></FormInput>
                    <FormInput type='text' name='Mobile' value={Mobile} onChange={this.handleChange} label='手机' required></FormInput>
                    <label><input type="radio" name='WorkType' value='FullTime' onChange={this.handleChange} />全职</label>
                    <label><input type="radio" name='WorkType' value='PartTime' onChange={this.handleChange} />兼职</label>
                    <div>
                        工作时间：<br/>
                        <label><input type="checkbox" name="availableTime" value="monday_11_5"
                                      onChange={this.handleChange}/>周一 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="tuesday_11_5"
                                      onChange={this.handleChange}/>周二 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="wednesday_11_5"
                                      onChange={this.handleChange}/>周三 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="thursday_11_5"
                                      onChange={this.handleChange}/>周四 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="friday_11_5"
                                      onChange={this.handleChange}/>周五 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="saturday_11_5"
                                      onChange={this.handleChange}/>周六 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="sunday_11_5"
                                      onChange={this.handleChange}/>周日 11am - 5pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="monday_5_11"
                                      onChange={this.handleChange}/>周一 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="tuesday_5_11"
                                      onChange={this.handleChange}/>周二 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="wednesday_5_11"
                                      onChange={this.handleChange}/>周三 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="thursday_5_11"
                                      onChange={this.handleChange}/>周四 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="friday_5_11"
                                      onChange={this.handleChange}/>周五 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="saturday_5_11"
                                      onChange={this.handleChange}/>周六 5am - 11pm</label><br/>
                        <label><input type="checkbox" name="availableTime" value="sunday_5_11"
                                      onChange={this.handleChange}/>周日 5am - 11pm</label><br/>
                    </div>
                        <PostBlob>上传简历</PostBlob>
                        <button type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}
export default JoinUs;