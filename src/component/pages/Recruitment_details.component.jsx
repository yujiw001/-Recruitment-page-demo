import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScoringHeader from '../scoring_header/scoring_header';
import Formodal from '../modal/formmodal.component';
class RecruitmentDetail extends Component  {
    constructor(props){
        super(props)
        this.state={
          
        };
    }
    render(){
        return(
            <div>
                <div className="path">
                    <ScoringHeader />
                    <Link className='option' to="/">首页</Link>
                    <Link className='option' to="/Recruitment">招聘频道</Link>
                    <Link className='option' to="/Recruitment/details">招聘详情</Link>
                </div>
                <div className="discription">
                    <h1>Regional Stategy</h1>
                    <h6>City Operation,Operation and Launch in Mexico City,MEX</h6>
                    <p>This role also is a unique oppotunity to help drive growth by operationalizing new Uber products and features across Latin America</p>
                    <Formodal />
                </div>
                
            </div>
        )
    }
}

export default RecruitmentDetail;