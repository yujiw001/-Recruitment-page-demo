import React, { Component, useState } from 'react';
import Example from './Test13ModalFun';

  class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.initialValue || 'placeholder'
        };
    }

    render() {
        return (
            <>
                <Example/>
            </>    
    );
}
}

export default HelloWorld;


  