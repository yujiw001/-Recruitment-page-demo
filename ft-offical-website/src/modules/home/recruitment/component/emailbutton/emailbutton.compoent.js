/* Created by Chelly P on Dec 16, 2019 */
import React, { Component } from 'react';

import './emailbutton.component.style.css';

class EmailButton extends Component {
    render() {
        let title=this.props.title;
        let area=this.props.area;

        const instruction = 'Instruction: %0d%0a Please attach your resume (.doc, .docx, .pdf) to this email. %0d%0a Applications without resume will NOT be reviewed. %0d%0a And you can leave a brief introduction of yourself in the body of this email. %0d%0a Thanks! We are looking forward to hearing from you.'

        return (
            <a href={"mailto:hr@fantuan.ca?&subject="+title+"+"+area+"&body="+instruction}>

            <button onClick={this.showModal} className='fh_apply_button'>
                Apply for this position > 
            </button>

            </a>
        )
    }
}

export default EmailButton;