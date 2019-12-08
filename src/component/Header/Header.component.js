import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.component.style.css';

class Header extends Component {
    render() {
        return (
            <div className='ft_backend_header'>
                <p>User Name</p>
                <pre>  |  </pre>
                <Link to='/Fantuan_sign_in' className='ft_backend_sign_out'>退出</Link>
            </div>
        )
    }
}

export default Header;