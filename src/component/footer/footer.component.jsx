//@author Yuji Wang
//@date 2019 Nov 1st
import React from 'react';
import {Link} from 'react-router-dom';
import './footer.styles.css';
import {BrowserRouter} from 'react-router-dom';
import '../../images/face.png'
import '../../images/ins.png'
import '../../images/youtu.png'
const Footer = ()=>{
    return(
        <div className="Foot">
            <div className='container' style={{'padding-top':'30px'}}>
                <div className='row'>
                    <div className='Left_section'>
                        <div>  
                            <Link className='option'>饭团外卖</Link>
                            <Link className='option'>关于我们</Link>
                            <Link className='option'> 媒体报道</Link>
                        </div>
                        <div>
                            <Link className='option'>饭团点评</Link>
                            <Link className='option'>Contack Us</Link>
                            <Link className='option'>职位招聘</Link>
                        </div>
                    </div>
                
                    <div className="Middle_section">
                        <span>© 2019 Fantuan Techn</span>
                    </div>

                    <div className="Right_section">
                        <ul className='row'>
                            <li><a href="http://www.facebook.com"><img src='../../images/face.png' /></a></li>
                            <li><a href="https://www.instagram.com"><img src='../../images/ins.png'/></a></li>
                            <li><a href="http://www.youtube.com"><img src='../../images/youtu.png' /></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;