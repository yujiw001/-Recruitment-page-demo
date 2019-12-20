import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YearComponent = styled.div`
  // color: #002a3a;       // the color of the year   // v11.03
  font-size: 1em;       // the size of the year
  font-weight: 400;
  width: 119px;         // the width of display the year    v11.04
  padding-right: 10px;  // the spaces between year to circle & line
  position: relative;
  body: center;

  &::after {            // the circle, noted by Bill H v11.11
    background: #ccc;   // the background color of the circle
    border-radius: 50%; // the body redius of the circle
    content: '';        // there is none in the circle
    height: 16px;       // the height of the circle
    width: 16px;        // the width of the circle
    right: -6px;        // the position of the circle
    position: absolute; // the position of the circle
    top: 5px;           // the start position of the line
  }
`;

const YearComponentItem = styled.div`
  margin-bottom: 8px;
  .item-year-component{ // added by Bill H. v11.04
    //position: fixed;
    width:250px;
  }
`;

const ContentYear = (props) => {
  const {
    year,
  } = props;

  return (
    <YearComponent className="year-component">
      <YearComponentItem className="item-year-component">
        { year }
      </YearComponentItem>
    </YearComponent>
  );
};

ContentYear.propTypes = {
  year: PropTypes.string.isRequired,
};

export default ContentYear;
