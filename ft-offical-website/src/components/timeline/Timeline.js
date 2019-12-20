import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimelineComponent = styled.div`
  border: 1px solid #979797;    // added by Bill H.
  background: #F6F6F6;          // added by Bill H.
  padding: 10px 10px 10px 10px; // top right bottom left
  width: auto;
  //width: 1140px;//1497px;
  //width: 100%;
  //height: 186px;
  margin: 0 auto;
`;

const Timeline = (props) => {
  const {
    children,
  } = props;

  return (
    <div>
      <TimelineComponent className="timeline-component">
        { children }
      </TimelineComponent>
    </div>
  );
};

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Timeline;