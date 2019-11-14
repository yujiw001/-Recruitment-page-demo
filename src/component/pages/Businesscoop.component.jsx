import React from 'react';
import ScoringHeader from '../scoring_header/scoring_header';
import Formodal from '../modal/formmodal.component';
const CooperationPage = () =>{
    return(
        <div className="Cooperationpage">
            <ScoringHeader />
            <div className="grow_with_fantuan">
                <h1>Grow With Fantuan</h1>
                <p>Life can be complicated but ordering food doesn't have to be. Let us take care of the details while you focus on what really matters</p>
                <Formodal />
            </div>
        </div>
    )
}

export default CooperationPage;