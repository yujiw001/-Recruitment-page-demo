import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BodyComponent = styled.div`
  // color: #002a3a;        // v11.03
  font-size: .9em;
  padding-bottom: 20px;
  padding-left: 15px;
  position: relative;

  @media (min-width: 1200px) {
    font-size: 1em;
  }

  &::before {
    background-color: #ccc;
    content: '';
    height: 100%;
    left: -3px;
    min-height: 95%;
    position: absolute;
    top: 10px;
    width: 2px;
    width: 3px;       // added by Bill H. v11.11 the width of line
  }
`;

const BodyComponentTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 0;
  margin-left: 26px;       // The start position of the description, by Bill H.
  text-align: left;
`;

const ContentBody = (props) => {
  const {
    title,
    children,
  } = props;

  return (
    <BodyComponent className="body-component">
      <BodyComponentTitle className="title-body-component">
        { title }
      </BodyComponentTitle>
      { children }
    </BodyComponent>
  );
};

ContentBody.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentBody;
