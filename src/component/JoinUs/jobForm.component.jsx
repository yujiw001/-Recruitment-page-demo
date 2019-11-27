import React from 'react';
import FormInput from '../form_input/formInput.component';
import PostBlob from '../postblob/postblob.component';
class JobForm extends React.Component {
    constructor(){
        super();
        this.state ={
            First_Name: '',
            Last_Name: '',
            email: '',
            description: '',
        }
    }
    render() {
        const {First_Name,Last_Name,email} = this.state;
        return(
            <div className="Form_input">
                <form className="jobForm">
                    <FormInput type='text' name='First_Name' value={First_Name} onChange={this.handleChange} label='姓名' required></FormInput>
                    <FormInput type='text' name='Last_Name' value={Last_Name} onChange={this.handleChange} label='住址' required></FormInput>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required></FormInput>
                    <textarea cols="50" rows="10">在这里输入内容...</textarea>
                    <PostBlob>上传简历</PostBlob>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default JobForm;