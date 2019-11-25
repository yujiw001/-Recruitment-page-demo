import React from 'react';
import './jobitem.styles.scss'
import {Link} from 'react-router-dom';

const JobItem = (props) => (
    <div>
        <div className="dropdown-divider"></div>
        <div className='job-item'>
            <span className='position' key={props.id}>{props.position}</span>
            <div className='loc_view'>
                <span className='location' key={props.id}>{props.area}</span>
                <Link to ={`/Recruitment/details/${props.id}`} className='view'>View Detail ></Link>
            </div>
        </div>
    </div>

);

export default JobItem;
