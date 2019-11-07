import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/dianpinglogo.svg';

const ScoringHeader = () => {
        return(
            <div className='header'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link className='option' >
                            商家合作
                    </Link>
                    <Link className='option' >
                            美食文章
                    </Link>
                </div>
            </div>
        );
}


export default ScoringHeader;