import React from 'react';
import ScoringHeader from '../scoring_header/scoring_header';
import Formodal from '../modal/formmodal.component';
import SingleCard from '../card/single_card.component';
import CardList from '../cardList/card_list.component';
import IntroducionData from '../pages/introduction_data';
import "./Business.styles.scss";
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
            <div className="Performance" >
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
                    <SingleCard />
            </div>

        </div>
    )
}

export default CooperationPage;