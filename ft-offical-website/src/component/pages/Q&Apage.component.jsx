import React from 'react';
import ScoringHeader from '../scoring_header/scoring_header';
import QACollapse from '../collapse/collapse.component';
const QandApage = () =>{
    return(
        <div>
            <ScoringHeader />
            <h1>We are here to help</h1> 
            <p>Making your life easier is our top priority. Five-star service gets you what you need,right when you need it</p>
            <div className="customerQA">
                <h1>Customer</h1>
                <QACollapse />
                <QACollapse />
                <QACollapse />
                <QACollapse />
            </div>
            <div className="merchantQA">
                <h1>Merchant</h1>
                <QACollapse />
                <QACollapse />
                <QACollapse />
                <QACollapse />
            </div>
            <div className="Driver">
                <h1>Driver</h1>
                <QACollapse />
                <QACollapse />
                <QACollapse />
                <QACollapse />
            </div>
        </div>
    )
}

export default QandApage;