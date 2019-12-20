import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './Test03color.css';

class Head extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSelect:0
        }
        this.setCur = this.setCur.bind(this)
    }
    setCur(e){
        console.log(e.currentTarget.getAttribute('index'))
        this.setState({
            isSelect:Number(e.currentTarget.getAttribute('index'))
        });
    }
    render(){
        let navs = [
            {
                path:"/",
                name:'首页'
            },
            {
                path:"/profile",
                name:'企业简介'
            },
            {
                path:"/product",
                name:'成功案例'
            },
            {
                path:"/content",
                name:'联系我们'
            }
        ]
        return (
            <header>
                <nav>
                    {
                       navs.map((item,i) => {
                        return <li key={i} index={i} className={this.state.isSelect === i ? 'activeted' : ''} onClick={this.setCur}><NavLink to={item.path}>{item.name}</NavLink></li>
                       }) 
                    }
                </nav>
            </header>
        )
    }
}
export default Head;
