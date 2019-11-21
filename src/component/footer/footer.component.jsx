//created by Yuji Wang on 10/28/2019
import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
// import '../../images/face.png'
// import '../../images/ins.png'
// import '../../images/youtu.png'
const Footer = ()=>{
    return(
        <div className="Foot">
            <BrowserRouter>
                <div className="Left_section"> 
                    <Link>饭团外卖</Link>
                    <Link>关于我们</Link>
                    <Link>媒体报道</Link>
                    <Link>饭团点评</Link>
                    <Link>媒体报道</Link>
                    <Link>Contack Us</Link>
                    <Link>职位招聘</Link>
                </div>
                <div className="Middle_section">
                    <span>© 2019 Fantuan Techn</span>
                </div>
                <div className="Right_section">
                    <ul class="social-icons">
                        <li><a href="http://www.facebook.com"><img src='../../images/face.png' /></a></li>
                        <li><a href="https://www.instagram.com"><img src='../../images/ins.png' /></a></li>
                        <li><a href="http://www.youtube.com"><img src='../../images/youtu.png' /></a></li>
                    </ul>
                </div>
            </BrowserRouter>
        </div>)
}

export default Footer;

