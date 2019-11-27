//created by Yuji Wang on 10/28/2019
import React from 'react';
import {Link} from 'react-router-dom';
import './footer.styles.css';
import {BrowserRouter} from 'react-router-dom';
import '../../images/face.png'
import '../../images/ins.png'
import '../../images/youtu.png'
const Footer = ()=>{
    return(
        <div className="fh_foot">
            <div className='container'>
                <div className='fh_foot_display'>
                    <div className='fh_foot_links'>
                        <div className='fh_foot_section'>
                            <Link to='#' className='fh_foot_link'>Fantuan Delivery</Link>
                            <Link to='#' className='fh_foot_link'>Fantuan Dianping</Link>
                        </div>
                        <div className='fh_foot_section'>
                            <Link to='/' className='fh_foot_link'>About Us</Link>
                            <Link to='/News' className='fh_foot_link'>Newsroom</Link>
                            <Link to='/Recruitment' className='fh_foot_link'>Careers</Link>
                        </div>
                        <div className='fh_foot_section'>
                            <Link to='#' className='fh_foot_link'>Contact Us</Link>
                            <Link to='#' className='fh_foot_link'>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className='fh_foot_feedback'>
                        <p className='fh_foot_fb_advice'>如果您有任何意见或建议，请发送邮件至</p>                     
                        <p className='fh_foot_fb_email'>feedback@fantuan.ca</p>
                        <p className='fh_foot_fb_copyright'>Copyright © 2019 Fantuan</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

