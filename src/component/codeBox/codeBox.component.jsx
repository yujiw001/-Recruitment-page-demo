import React, { Component } from "react";


class Codebox extends Component {
    constructor(props) {
      super(props);
      this.state = {
          searchField: ''
      }
    }
    render(){
      return(
        <input
          className='search'
          type= "search"
          placeholder = '请输入验证码' 
          onChange={e=>{this.setState({ searchField:e.target.value})}}
        />
      )
    }
}
export default Codebox