import React,{Component} from 'react';
import styled from 'styled-components';

// for time line
const TimelineComponent = styled.div`
  border: 1px solid #979797;    // added by Bill H.
  background: #F6F6F6;          // added by Bill H.
  padding: 10px 10px 10px 10px; // top right bottom left
  width: 1140px;//1497px;
  //width: 100%;
  //height: 186px;
  margin: 0 auto;
`;

// for content
const ContentComponent = styled.div`
  display: flex;
  line-height: 1.3;
  line: 2px solid;  
  color: red

  &:last-child {
    .body-component {
        &::before {
          display: none;
        }
      }
    }
  }
`;

// for year
const YearComponent = styled.div`
  color: #002a3a;       // the color of the year
  font-size: 1em;       // the size of the year
  font-weight: 400;
  width: 110px;         // the width of display the year
  padding-right: 10px;  // the spaces between year to circle & line
  position: relative;
  body: center;

  &::after {
    background: #ccc;   // the background color of the circle
    border-radius: 50%; // the body redius of the circle
    content: '';        // there is none in the circle
    height: 16px;       // the height of the circle
    width: 16px;        // the width of the circle
    right: -6px;        // the position of the circle
    position: absolute; // the position of the circle
    top: 5px;           // the start position of the line
    //hover{ content: red;}; // added by Bill H.
  }
`;

const YearComponentItem = styled.div`
  margin-bottom: 8px;
`;

// for body
const BodyComponent = styled.div`
  color: #002a3a;
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
  }
`;

const BodyComponentTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 0;
  margin-left: 26px;       // The start position of the description, by Bill H.
  text-align: left;
`;

// For description
const DescriptionComponent = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: left;
  float: right;           // by Bill H.
  width: 350px;           // The widht of the content of description; by Bill H.
  margin-left: 26px;      // Do it fot "title" in the tl_content_body.js, by Bill H.
  position: reltive;
  `;

const DescriptionComponentText = styled.span`
  font-weight: 300;
  `;

const DescriptionComponentTextOptional = styled.span`
  color: #818a91;
  font-style: italic;

  &::before {
    content: '- (';
    margin-left: 5px;
  }

  &::after {
    content: ')';
  }
`;

class Timelinenew extends Component {

  constructor(props) {
    super(props);
    const children  = this.props.children;
}

render() {
    return (
      <TimelineComponent className="timeline-component">
          <ContentComponent className="content-component" ref="timeline1">
              <YearComponent className="year-component" style={{color:'red'}}>
                <YearComponentItem className="item-year-component">
                    2014-06-13
                </YearComponentItem>
              </YearComponent>
              <BodyComponent className="body-component">
                <BodyComponentTitle className="title-body-component">
                  饭团成立
                </BodyComponentTitle>
                <DescriptionComponent>
                  <DescriptionComponentText className="text-description-component">
                      Life can be complicated but ordering food doesn't have to be.
                  </DescriptionComponentText>
                    <DescriptionComponentTextOptional className="optional-description-component">
                      I'm an amazing optional text
                    </DescriptionComponentTextOptional>
                </DescriptionComponent>
              </BodyComponent>
          </ContentComponent>

          <ContentComponent className="content-component" ref="timeline2">
              <YearComponent className="year-component">
                <YearComponentItem className="item-year-component">
                  2015 - 2016
                </YearComponentItem>
              </YearComponent>
              <BodyComponent className="body-component">
                <BodyComponentTitle className="title-body-component">
                  扩展多伦多城市
                </BodyComponentTitle>
                <DescriptionComponent>
                  <DescriptionComponentText className="text-description-component">
                      Life can be complicated but ordering food doesn't have to be.
                      Life can be complicated but ordering food doesn't have to be.
                      Life can be complicated but ordering food doesn't have to be.
                      Life can be complicated but ordering food doesn't have to be.
                      Life can be complicated but ordering food doesn't have to be.
                      Life can be complicated but ordering food doesn't have to be.
                  </DescriptionComponentText>
                </DescriptionComponent>
              </BodyComponent>
          </ContentComponent>

          <ContentComponent className="content-component" ref="timeline3">
              <YearComponent className="year-component">
                <YearComponentItem className="item-year-component">
                  2017
                </YearComponentItem>
              </YearComponent>
              <BodyComponent className="body-component">
                <BodyComponentTitle className="title-body-component">
                  突破每日5000单
                </BodyComponentTitle>
                <DescriptionComponent>
                  <DescriptionComponentText className="text-description-component">
                    Life can be complicated but ordering food doesn't have to be.
                  </DescriptionComponentText>
                  <DescriptionComponentTextOptional className="optional-description-component">
                      I'm an amazing optional text
                    </DescriptionComponentTextOptional>
                </DescriptionComponent>
              </BodyComponent>
          </ContentComponent>

          <ContentComponent className="content-component" ref="timeline4">
              <YearComponent className="year-component">
                <YearComponentItem className="item-year-component">
                  2019 - Now
                </YearComponentItem>
              </YearComponent>
              <BodyComponent className="body-component">
                <BodyComponentTitle className="title-body-component">
                  扩展纽约，洛杉矶
                </BodyComponentTitle>
                <DescriptionComponent>
                  <DescriptionComponentText className="text-description-component">
                    Life can be complicated but ordering food doesn't have to be.
                  </DescriptionComponentText>
                  <DescriptionComponentTextOptional className="optional-description-component">
                      I'm an amazing optional text
                    </DescriptionComponentTextOptional>
                </DescriptionComponent>
              </BodyComponent>
          </ContentComponent>
        </TimelineComponent>
    )
  };
}

export default Timelinenew;
