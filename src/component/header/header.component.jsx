//created by Yuji Wang on 10/28/2019
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.styles.css';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            hidden: true,
            language: ''
        };
    }

    handleClick = () =>{
        this.setState(state => ({
            hidden: ! this.state.hidden
        }));
    }

    render() {
        return(
            <div className="header"> 
                <div className='container'>
                    <div className='header_display'>  
                        <div className='header_left'>
                            <div className='header_title'>Fantuan</div>
                            <div className='header_options'>
                                <Link className='header_option' to='/'>About</Link>
                                <Link className='header_option' to='/News'>Newsroom</Link>
                                <Link className='header_option' to="/Recruitment">Careers</Link>
                            </div>
                        </div>
                        <div className='header_language'>中文</div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default Header;
