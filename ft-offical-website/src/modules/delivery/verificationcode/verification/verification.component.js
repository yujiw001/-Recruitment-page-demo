import React, { Component } from 'react';
import Vcode from '../vcode/vode.component';
import { Input } from 'antd';
import { FormattedMessage} from 'react-intl';

import './verification.component.style.css';

class VerificationCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
          inputstring: '', 
          vcodestring: '-1', 
          code: '',
        };
    }

    onInputStringChange(e) {
        this.setState({
          inputstring: e.target.value,
        });
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
        var tip; 

        return (
            <div className='ft_verification'>
                <div>
                <Input placeholder="Please input code" 
                        value={this.state.inputstring} 
                        onChange={e => this.onInputStringChange(e)} 
                        maxLength={20} 
                        size='large' 
                        style={{width:'250px'}}
                        required
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
                <span className='ft_verification_instruction'><FormattedMessage id="fd_partner_become_ver_notclear"/>? <FormattedMessage id="fd_partner_become_ver_change"/></span>
                </div>
            </div>
        )
    }
}

export default VerificationCode;