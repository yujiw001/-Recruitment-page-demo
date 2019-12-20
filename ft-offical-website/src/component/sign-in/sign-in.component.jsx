import React, {Component} from 'react';

import Validation from 'react-validation';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';

export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            msg: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        var data = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(data)
        fetch( `http://localhost:3000/users/add?username=${data.username}&password=${data.password}` )
        .catch(err => console.error(err))
    }


    handleChange = event => {
        //event.target will end up being the input element itself. And we want to pull off the 'name and value'
        const{name,value} = event.target;
        this.setState({[name]:value});
    };

    render() {
        return (
            <div className="container register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>username</label>
                    <input onChange={this.handleChange} className="form-control" value={this.state.username} placeholder='请输入账户' name='username' validations={['required']}/>
                    <label>password</label>
                    <input onChange={this.handleChange} className="form-control" value={this.state.password} placeholder='请输入密码' name='password' validations={['required']}/>
                    <div className="submit-section">
                        <button className="btn btn-uth-submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}