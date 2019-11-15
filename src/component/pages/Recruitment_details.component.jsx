import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ScoringHeader from '../scoring_header/scoring_header';
import Formodal from '../modal/formmodal.component';
import JobData from './position_data';
import RequirementData from './requirement_data';
import ResponsibilityData from './responsibility_data';
class RecruitmentDetail extends Component  {
    constructor(props){
        super(props)
        this.state={
          jobdata:JobData,
          requirementData:RequirementData,
          responsibilityData:ResponsibilityData
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
            
                </div>
                
            </div>
        )
    }
}

export default RecruitmentDetail;