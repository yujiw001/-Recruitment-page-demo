import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Header from '../header/header.component';
import UniversalModule from './component/universal_module';
import JobData from '../fake_data/position_data';
import RequirementData from '../fake_data/requirement_data';
import ResponsibilityData from '../fake_data/responsibility_data';
// import JobFormModal from './component/jobformmodal.component';
import EmailButton from './component/emailbutton/emailbutton.compoent';

import List from './component/list.component';
// import Footer from '../footer/footer.component';

import Header from '../Header';
import Footer from '../Footer';

import './Recruitment_details.component.style.css';

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
                <div className='ft-career-container-bg'>
                <div className='container'>
                    <div className="fh_rec_det_path">
                        <Link className='path_option' to="/">Home</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option' to="/career">Careers</Link>
                        <span className='path_arrow'>></span>
                        <Link className='path_option'>Job details</Link>
                    </div>

                    <div className='fh_rec_det_display'>
                        <div className="description">
                            <UniversalModule title={target_position.position} area={target_position.area} content={target_position.brief} ItemComponent={EmailButton}/>
                        </div>

                        <div>
                            <div className="responsibility">
                                <h2 className='ft-w1140-smtext-fs16 fh_rec_det_resp_title'>Responsibility</h2>
                                <List data={responsibilityData} {...responsibilityrest} />
                            </div>

                            <div className= "requirement">
                                <h2 className='fh_rec_det_req_title'>Requirement</h2>
                                <List data={requirementData} {...requirementrest} />
                            </div>
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