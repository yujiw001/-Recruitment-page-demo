import React, { Component } from 'react';
import { Button } from 'antd';

class EmailButton extends Component {
    render() {
        let title=this.props.title;
        let area=this.props.area;

        const instruction = 'Instruction: %0d%0a Please attach your resume (.doc, .docx, .pdf) to this email. %0d%0a Applications without resume will NOT be reviewed. %0d%0a And you can leave a brief introduction of yourself in the body of this email. %0d%0a Thanks! We are looking forward to hearing from you.'

        return (
            <a href={"mailto:test@jsphp.net?subject=test&cc=sample@hotmail.com&subject="+title+"+"+area+"&body="+instruction}>

            <Button onClick={this.showModal} className='ft_rec_button' 
                            style={{height:'49px', 
                                    background:'rgba(6,34,54,1)', 
                                    'border-radius':'100px',
                                    'font-size':'16px',
                                    color:'rgba(255,255,255,1)',
                                }}
            >
                Apply for this position > 
            </Button>

            </a>
        )
    }
}

export default EmailButton;