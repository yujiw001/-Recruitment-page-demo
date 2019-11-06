//@author Yuji Wang
//@date 2019 Nov 30rd

import React from 'react';
import './dropdown_box.styles.css';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const DropDownBox = () => (
    <div className='dropdown-box'>
        <BrowserRouter>
            <Link className='sublink'>
                饭团外卖
            </Link>
            <Link className='sublink'>
                饭团点评
            </Link>
        </BrowserRouter>
    </div>
)

export default DropDownBox;