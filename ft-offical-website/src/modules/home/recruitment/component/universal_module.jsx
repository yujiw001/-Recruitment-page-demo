import React from 'react';

const UniversalModule = (props) => {
    let ItemComponent = props.ItemComponent;
    let pos_title = props.title;
    let pos_area = props.area;
    return(
        <div>
            <div className='ft-w1140-section-fs40 fh_rec_det_title'>{pos_title}</div>
            <div className='ft-w1140-section-fs16 fh_rec_det_area'>{pos_area}</div>
            <div className='ft-w1140-smtext-fs16 fh_rec_det_content'>{props.content}</div>
            <div style={{'padding-bottom':'63px'}}></div>
            <ItemComponent title={pos_title} area={pos_area}/>
        </div>
    )
    }

export default UniversalModule;