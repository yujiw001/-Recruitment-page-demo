//created by Yuji Wang on 10/28/2019
//Integrate all the required components to create the Recritment page.
import React, { Component } from 'react';
import Slideshow from '../../component/slideshow/slideshow.component';
import Pagination from '../../component/paginate/pagebutton/pagebutton.component';
import Job_Item from '../paginate/jobpost/jobitem/jobitem.component'
import Fantuan_value from '../../component/FanTuanValue/FanTuanValue.component';
import Footer from '../../component/footer/footer.component';
import JobData from '../pages/position_data';
import Viewmore from '../collapse/viewmore.component';
import LOLCollapse from '../collapse/collapse_link.component';
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
        <div className="RecruitmentPage">
          <h1>Fantuan 团建</h1>
          <Slideshow />
          <Fantuan_value />
          {/* pass diffenent components which need to be displayed as parameter into the Pagination component */}
          {/* <Pagination {...this.state} ItemComponent={Job_Item}/> */}
          <Viewmore />
          <Footer />
        </div>
      );
  }
}
export default RecruitmentPage;