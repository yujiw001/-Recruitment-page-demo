import React from 'react';
import ReactDOM from 'react-dom';
// import AnimationCount from 'react-count-animation';
// import 'react-count-animation/dist/count.min.css';

import AnimationCount from './AnimationCount';
import './Test04NumDisplay.css';

const Count = () => {
  const settings = {
    start: 99923,
    count: 9999999,
    duration: 3000,
    decimals: 4,
    useGroup: true,
    animation: 'up',
  };
  const settings2 = {
    start: 1,
    count: 9999999,
    duration: 1000,
    decimals: 2,
    useGroup: true,
    animation: 'roll',
  };
  const settings3 = {
    start: 1,
    count: 9999999,
    duration: 3000,
    decimals: 2,
    useGroup: true,
    animation: 'slide',
  };
  return (
    <div>
      <h1 className="title">Count Animation</h1>
      <div className="exam-div">
        <AnimationCount {...settings}/>
      </div>
      <h1 className="title">Count Roll</h1>
      <div className="exam-div">
        <AnimationCount {...settings2}/>
      </div>
      <h1 className="title">Count Slide</h1>
      <div className="exam-div">
        <AnimationCount {...settings3} />
      </div>
    </div>
  );
}
 
export default Count;
