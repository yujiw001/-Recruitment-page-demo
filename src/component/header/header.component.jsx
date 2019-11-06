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
            <div className='header'>
                <span className='option'onClick={this.handleClick}>大饭团</span>
                {
                    this.state.hidden ? null: <DropDownBox />
                }
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