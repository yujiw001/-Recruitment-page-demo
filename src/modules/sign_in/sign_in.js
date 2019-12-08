import React, { Component } from 'react';
import SignIn from '../../component/SignIn/SignIn.component';

import './sign_in.style.css';

class SignInPage extends Component {
    render() {
        return (
            <div className='ft_backend_si_background'>
                <div className='ft_backend_si_content'>
                    <p className='ft_backend_si_logo'>FANTUAN</p>
                    <p className='ft_backend_si_title'>饭团网站后台</p>
                    <div className='ft_backend_si_input'>
                        <SignIn />
                    </div>
                    <pre className='ft_backend_si_footer'>2019  Fantuan   |   Terms and Conditions</pre>
                </div>
            </div>
        )
    }
}

export default SignInPage;