import React from 'react';
import './jobitem.styles.scss'
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

const JobItem = ({items}) => (
    <div className='job-item'>
        <BrowserRouter>
            {items.map(item =>(
                <div>
                    <Link className='position' key={item.id}>{item.name}</Link>
                    <span className='location'key={item.id}>{item.price}</span>
                </div>)
            )}
           
        </BrowserRouter>
    </div>
);

export default JobItem;