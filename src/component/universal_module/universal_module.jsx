import React from 'react';

const UniversalModule = (props) => {
    let ItemComponent = props.ItemComponent;
    return(
        <div>
            <div className='fh_rec_det_title'>{props.title}</div>
            <div className='fh_rec_det_area'>{props.area}</div>
            <div className='fh_rec_det_content'>{props.content}</div>
            <div style={{'padding-bottom':'63px'}}></div>
            <ItemComponent />
        </div>
    )
    }

export default UniversalModule;