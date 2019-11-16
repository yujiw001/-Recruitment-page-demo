import React from 'react';
import {Link} from 'react-router-dom';
import DropDownBox from '../dropdown_box/dropdown_box.component';
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
            {/*<nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
                <div className="container">
                    <div className="collapse navbar-collapse justify-content-space-between">

                        <ul className="nav navbar-nav">
                            
                            <li className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{color:"#CCCCCC"}} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    大饭团
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">饭团外卖</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">饭团点评</a>
                                </div>
                            </li>

                            <li className='nav-item'>
                                <a className="nav-link" href="/" style={{color:"#CCCCCC"}}>首页</a>
                            </li>

                            <li className='nav-item'>
                                <a className="nav-link" href="/" style={{color:"#CCCCCC"}}>关于饭团</a>
                            </li>

                            <li className='nav-item'>
                                <a className="nav-link" href="/" style={{color:"#CCCCCC"}}>媒体新闻</a>
                            </li>

                            <li className='nav-item'>
                                <a className="nav-link" href="/" style={{color:"#CCCCCC"}}>招聘频道</a>
                            </li>

                            <span className='nav-link' style={{color:"#CCCCCC"}}>中文</span>

                        </ul>
                    </div>
                </div>
            </nav>*/}



                {/*<p className='title' onClick={this.handleClick}> 大饭团 </p>

                {
                    this.state.hidden ? null: <DropDownBox />
                }*/}

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
                    
                    
            </div>*/}
            </div>
        );
    }
}

export default Header;