import React, { Component } from "react";
import { Input } from 'antd';

class Codebox extends Component {
    constructor(props) {
      super(props);
      this.state = {
          searchField: ''
      }
    }
    render(){
      return(
        <Input
          className='search'
          type= "search"
          placeholder = 'Input code' 
          onChange={e=>{this.setState({ searchField:e.target.value})}}
          size='large'
        />
      )
    }
}
export default Codebox