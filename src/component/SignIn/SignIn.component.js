import React, {Component} from 'react';
import axios from 'axios';
import { Input, Icon } from 'antd';

import './SignIn.component.style.css';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            msg: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        alert('username was submitted: ' + this.state.username);
        event.preventDefault()
        var data = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(data)
        axios({
            method: 'post' ,
            url: 'http://localhost:3000/users/add' ,
            data: data
         })
         .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    handleChange = event => {
        const{name,value} = event.target;
        this.setState({[name]:value});
    };

    render() {
        return (
            <div className="register-form">
                <form onSubmit={this.handleSubmit} method="POST">
                    
                    <div className='ft_backend_SI_input_display'>
                        <Input 
                            onChange={this.handleChange} 
                            className="ft_backend_SI_input" 
                            value={this.state.username} 
                            placeholder='请输入账户' 
                            name='username' 
                            validations={['required']}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            required
                        />
                        <Input.Password
                            onChange={this.handleChange} 
                            className="ft_backend_SI_input" 
                            value={this.state.password} 
                            placeholder='请输入密码' 
                            name='password' 
                            validations={['required']}
                            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            required
                        />
                    </div>

                    <div className="submit-section">
                        <button className="ft_backend_SI_button btn btn-uth-submit">
                            Login
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;