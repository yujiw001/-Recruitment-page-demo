import React from 'react';
//import {Switch,Route} from 'react-router-dom';
import Slideshow from '../../component/slideshow/slideshow.component';
//import DropDownBox from './component/dropdown_box/dropdown_box.component';
import {withRouter} from 'react-router-dom';
import Header from '../../component/header/header.component';
// import pageButton from './component/paginate/pagebutton/pagebutton.component';
import Pagination from '../../component/paginate/pagebutton/pagebutton.component';
import JobList from '../../component/paginate/jobpost/joblist.component';

import Fantuan_value from '../../component/FanTuanValue/FanTuanValue.component';
import Footer from '../../component/footer/footer.component';

const RecruitmentPage = () => {
    return (
        <div className="RecruitmentPage">
          
          <h1>Fantuan 团建</h1>
          <Slideshow />
          <JobList />
          <Fantuan_value />
          <Pagination></Pagination>
          <Footer />
          
        </div>
      );
}

export default withRouter(RecruitmentPage);