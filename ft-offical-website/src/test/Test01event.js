import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialValue || 'placeholder',
            textcolor: 'blue'
        };
        this.getInitialState = this.getInitialState.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    getInitialState() {
        return {
            backgroundColor:'#FFFFFF'
        }
    }

    handleMouseMove(event) {
        var newColor = '#66666';
        this.setState({
            backgroundColor:newColor,
            textcolor:'yellow'
        });
    }

    handleMouseOut(event) {
        var newColor = '#66666';
        this.setState({
            backgroundColor:newColor,
            textcolor:'red'
        });
    }

    handleWheel(event) {
        // var newColor = (parseInt(this.state.backgroundColor.substr(1),16) +
        //     event.deltaY * 997).toString(16);
    //    newColor = '#' + newColor.substr(newColor.length - 6).toUpperCase();
        var newColor = '#66666';
        this.setState({
            backgroundColor:newColor
        });
    }

    render() {
        console.log(this.state);
        var style = {
            color:this.state.textcolor
        }
        // return <div onWheel={this.handleWheel} style={this.state}>
        return <div onMouseMove={this.handleMouseMove} onMouseOut={this.handleMouseOut}  style={this.state}>
            <p style={style}>Hello,World</p>
        </div>;
    }
}

export default HelloWorld;
