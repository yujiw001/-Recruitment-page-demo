import React, { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

import JobItem from './jobitem/jobitem.component';

function PositionCollapse(props) {
  const [open, setOpen] = useState(false);
  const [visible,setInvisble] = useState(true);
  const restList = props.indexList;
  return (
    <div className='fh_rec_view_more'>
      {visible && 
        <div>
            <div style={{'padding-top':'57px'}} />
            <Button
              className='fh_rec_view_more_button ft-w1140-button-fs16'
              onClick={() => {
                setOpen(!open); setInvisble(!visible);}}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              View more
            </Button>
        </div>
      }
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            restList.slice(6).map(({...otherCollectionProps}) => (
              <JobItem  {...otherCollectionProps} />
          ))
          }
        </div>
      </Collapse>
    </div>
  );
}

export default PositionCollapse;
