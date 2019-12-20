import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialValue || 'placeholder'
        };
        this.getInitialState = this.getInitialState.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    getInitialState() {
        return {
            x:0,
            y:0
        }
    }

    handleMouseMove(event) {
        this.setState({
            x:event.clientX,
            y:event.clientY
        });
    }

    render() {
        return <div onMouseMove={this.handleMouseMove}
            style={{
                height:'500px',
                width:'600px',
                backgroundColor:'gray'
            }}>{this.state.x + ', ' + this.state.y}
        </div>;
    }
}

export default HelloWorld;
