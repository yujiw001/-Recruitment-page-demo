import React from 'react';
import './jobitem.styles.scss'
import {Link} from 'react-router-dom';

const JobItem = (props) => (
    <div className='job-item'>
            <div>
                <Link to ={`/Recruitment/details/${props.id}`} className={`${props.Expedited?'expedited':''} position`} key={props.id}>{props.position}</Link>
                {
                    props.Expedited ? <span className="hotLabel">hot</span> : null
                }
                <span className='location'key={props.id}>{props.area}</span>
                <Link to ={`/Recruitment/details/${props.id}`} className='viewDetail' key={props.id}>View Detail</Link>
            </div>
    </div>
);

export default JobItem;
