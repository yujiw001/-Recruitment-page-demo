import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from '../header/header.component';
import UniversalModule from '../universal_module/universal_module';
import JobData from './position_data';
import RequirementData from './requirement_data';
import ResponsibilityData from './responsibility_data';
import Formodal from '../modal/formmodal.component';

import JobFormModal from '../modal/jobformmodal.component';

import List from '../list/list.component';
import Footer from '../footer/footer.component';

import '../css/Recruitment_details.component.css';

class RecruitmentDetail extends Component  {

    constructor(props){
        super(props)
        this.state={
          jobdata:JobData,
          requirementData:RequirementData,
          responsibilityData:ResponsibilityData,
          current_id:this.props.match.params.jobpost
        };
    }

    render(){

        console.log(this.props);
        // const {current_id} = this.props.params.article;
        const { jobdata } = this.state;
        const { requirementData,...requirementrest} = this.state;
        const { responsibilityData,...responsibilityrest}=this.state;
        const target_position = jobdata.find(data => data.id==this.state.current_id);

        return(
            <div>
                <Header /> 
                <div className='container'>
                    <div className="fh_rec_det_path">
                        <Link className='path_option' to="/">Home</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/Recruitment">Careers</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option'>Job details</Link>
                    </div>

                    <div className='fh_rec_det_display'>
                        <div className="description">
                            <UniversalModule title={target_position.position} area={target_position.area} content={target_position.brief} ItemComponent={JobFormModal}/>
                        </div>

                        <div>
                            <div className="responsibility">
                                <h2 className='fh_rec_det_resp_title'>Responsibility</h2>
                                <div className='fh_rec_det_reps'>
                                    <List data={responsibilityData} {...responsibilityrest} />
                                </div>
                            </div>

                            <div className= "requirement">
                                <h2 className='fh_rec_det_req_title'>Requirement</h2>
                                <List data={requirementData} {...requirementrest} />
                            </div>
                        </div>
                    </div>    
                </div>  

                <Footer/>
            </div>
        )
    }
}

export default RecruitmentDetail;