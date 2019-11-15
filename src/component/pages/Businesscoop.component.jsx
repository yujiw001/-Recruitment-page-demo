import React from 'react';
import ScoringHeader from '../scoring_header/scoring_header';
import Formodal from '../modal/formmodal.component';
import SingleCard from '../card/single_card.component';
import "./Business.styles.scss";
import Slideshow from '../slideshow/slideshow.component';
const CooperationPage = () =>{
    const title='Increase sales by up to 30%'
    const content="Life can be complicated but ordering food doesn't have to be. Let us take care of the details while you focus on what really matters"
    const divStyle = {
        display: 'flex',
        alignItems: 'center'
      };
    return(
        <div className="Cooperationpage">
            <ScoringHeader />
            <div className="grow_with_fantuan">
                <h1>Grow With Fantuan</h1>
                <p>Life can be complicated but ordering food doesn't have to be. Let us take care of the details while you focus on what really matters</p>
                <Formodal />
            </div>
            <div className="Performance_upper" style={divStyle} >
                    <SingleCard />
                    <SingleCard />
            </div>
            <div className="Performance_lower" >
                    <SingleCard />
                    <SingleCard />
            </div>

            <div className="Overview" >
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
            </div>
            <div className="Carousel">
                    <Slideshow />
            </div>

        </div>
    )
}

export default CooperationPage;