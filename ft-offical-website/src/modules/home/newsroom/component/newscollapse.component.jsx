/* Create by Chelly P */
import React, { useState } from 'react';

import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

import NewsCard from './newscard.component';

function NewsCollapse(props) {
  const [open, setOpen] = useState(false);
  const [visible,setInvisble] = useState(true);
  const restList = props.indexList;
  return (
    <div className='fh_news_view_more'>
      {visible && 
        <div className='fh_news_view_more_display'>
            <hr className='fh_news_view_more_decoration_line' />
            <Button
              className='fh_news_view_more_button ft-w1140-button-fs16'
              onClick={() => {
                setOpen(!open); setInvisble(!visible);}}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              View more
            </Button>
            <hr className='fh_news_view_more_decoration_line' />
        </div>
      }
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className='fh_news_cardgroup'>
          {
            restList.slice(9).map(({...otherCollectionProps}) => (
              <NewsCard {...otherCollectionProps} />
          ))
          }
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default NewsCollapse;
