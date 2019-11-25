//created by Yuji Wang on 10/28/2019
import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import './header.styles.css';

class Header extends React.Component {

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
                <ul className="nav">   
                    <li className="title nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" >大饭团</a>

                        <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">饭团外卖</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">饭团点评</a>
                        </div>
                    </li>
                </ul>

                <div className='options'>
                    
                        <Link className='option' to="/">首页</Link>
                        <Link className='option'>关于饭团</Link>
                        <Link className='option'>媒体新闻</Link>
                        <Link className='option' to="/Recruitment">招聘频道</Link>
                        <span className='option'>中文</span>         
                </div>
        
            </div>
        );
    }
}

export default Header;
