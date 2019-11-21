import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Job_Item from '../paginate/jobpost/jobitem/jobitem.component';
function PositionCollapse(props) {
  const [open, setOpen] = useState(false);
  const [visible,setInvisble] = useState(true);
  const restList = props.indexList;
  return (
    <>
      {visible && <Button
        onClick={() => {
          setOpen(!open); setInvisble(!visible);}}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        View more
      </Button>}
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            restList.slice(6).map(({id,...otherCollectionProps}) => (
              <Job_Item key={id} {...otherCollectionProps} />
          ))
          }
        </div>
      </Collapse>
    </>
  );
}

export default PositionCollapse;
