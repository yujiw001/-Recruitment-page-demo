//created by Yuji Wang on 10/28/2019
//Integrate all the required components to create the Recritment page.
import React, { Component } from 'react';
import Header from '../../component/header/header.component';
import Slideshow from '../../component/slideshow/slideshow.component';
import Pagination from '../../component/paginate/pagebutton/pagebutton.component';
import Job_Item from '../paginate/jobpost/jobitem/jobitem.component'
import Fantuan_value from '../../component/FanTuanValue/FanTuanValue.component';
import Footer from '../../component/footer/footer.component';
import JobData from '../pages/position_data';
import Viewmore from '../collapse/viewmore.component';

import '../css/Recruitment_page.component.css';

class RecruitmentPage extends Component  {
  constructor(props){
    super(props)
    this.state={
      // the data read from the backstage database, waiting to be rendered
      renderData:JobData,
    };
  }
  render (){
    return (
        <div className="">
          <Header />

          <div className='container'>
            <h1 className='fh_rec_career'>Career</h1>

            <Slideshow />

            <Viewmore />
          </div>

          <Footer />
        </div>
      );
  }
}
export default RecruitmentPage;