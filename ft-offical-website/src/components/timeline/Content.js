import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var ContainerComponent = styled.div`
  //display: flex;              // v11.04
  display: -webkit-inline-box;  // v11.04
  line-height: 1.3;
  line: 2px solid;
  
  color: #002a3a;       // the color of the year    v11.03
  &: hover {
    color: red;
    background: blue;
  }

  &:last-child {
    .body-component {
        &::before {
          display: none;
        }
      }
    }
  }
`;

const Content = (props) => {
  const {
    children,
  } = props;

  return (
    <ContainerComponent className="content-component">
      { children }
    </ContainerComponent>
  );
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;