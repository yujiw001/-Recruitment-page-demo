import React, { Component } from 'react';

class UniversalModule extends Component{
    constructor(props){
        super(props)
        this.state={
          containImg:true
        };
    }
    render(){
        let ItemComponent = this.props.ItemComponent;
        return(
            <div className="module-container">
                <h2>{this.props.title}</h2>
                <p>{this.props.content}</p>
                <ItemComponent />
                <img>{this.props.image}</img>
            </div>
        )
    }
}

export default UniversalModule;