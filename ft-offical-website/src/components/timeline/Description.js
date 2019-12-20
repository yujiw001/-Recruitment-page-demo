import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DescriptionComponent = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: left;
  float: right;           // by Bill H.
  width: auto;
  // width: 250px;           // The widht of the content of description; by Bill H.
  margin-left: 26px;      // Do it fot "title" in the tl_content_body.js, by Bill H.
  position: reltive;
  `;

const DescriptionComponentText = styled.span`
  font-weight: 300;
  `;

const DescriptionComponentTextOptional = styled.span`
  // color: #818a91;    // v11.03
  font-style: italic;

  &::before {
    content: '- (';
    margin-left: 5px;
  }

  &::after {
    content: ')';
  }
`;

const Description = (props) => {
  const {
    text,
    optional,
  } = props;

  return (
    <DescriptionComponent>
      <DescriptionComponentText className="text-description-component">
        { text }
      </DescriptionComponentText>
      { optional
        ? (
          <DescriptionComponentTextOptional className="optional-description-component">
            { optional }
          </DescriptionComponentTextOptional>
        ) : ''
      }
    </DescriptionComponent>
  );
};

Description.propTypes = {
  text: PropTypes.string.isRequired,
  optional: PropTypes.string,
};

Description.defaultProps = {
  optional: '',
};

export default Description;
