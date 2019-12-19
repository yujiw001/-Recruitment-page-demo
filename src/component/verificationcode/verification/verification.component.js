/* Create by Chelly P on Dec 13, 2019 */
import React, { Component } from 'react';
import Vcode from '../vcode/vode.component';
import { Input } from 'antd';

import './verification.component.style.css';


class VerificationCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
          inputstring: '', 
          vcodestring: '-1', 
          code: '',
          flag: '',
        };
    }

    onInputStringChange(e) {
        this.setState({ 
            inputstring: e.target.value  
        });
        if (e.target.value.toLowerCase() === this.state.vcodestring.toLowerCase()) {
            this.setState({ flag: 'correct' }, );
            this.props.flagupdate();
        }
        else {
            this.setState({ flag: '' }, );
        }
        console.log(this.state.flag);
      }
    
    onVcodeStringChange(v) {
        console.log('Trigger onChange callback', v);
        if (v) {
            this.setState({
            vcodestring: v,
            });
        }
    }

    render() {
        var validateCode = this.state.vcodestring;
        var thisInput = this.state.inputstring;

        return (
            <div className='ft_verification'>
                <div>
                <Input placeholder="Please input code" 
                        value={this.state.inputstring} 
                        onChange={e => this.onInputStringChange(e)} 
                        maxLength={20} 
                        size='large' 
                        style={{width:'250px'}}
                />
                

                <span className='ft_verification_instruction'>
                    {
                        validateCode.toLowerCase() === thisInput.toLowerCase() ? 
                        'Correct' : 'Not Correct'
                    }
                </span> 
                </div>
                <div>
                <Vcode onChange={v => this.onVcodeStringChange(v)} value={this.state.code} />
                <span className='ft_verification_instruction'>Not clear? Click to change</span>
                </div>
            </div>
        )
    }
}

export default VerificationCode;