import React, { Component } from 'react';
//import {Switch,Route} from 'react-router-dom';
import Slideshow from '../../component/slideshow/slideshow.component';
//import DropDownBox from './component/dropdown_box/dropdown_box.component';
import {withRouter} from 'react-router-dom';
import Header from '../../component/header/header.component';
// import pageButton from './component/paginate/pagebutton/pagebutton.component';
import Pagination from '../../component/paginate/pagebutton/pagebutton.component';
// import JobList from '../../component/paginate/jobpost/joblist.component';
import Job_Item from '../paginate/jobpost/jobitem/jobitem.component'
import Fantuan_value from '../../component/FanTuanValue/FanTuanValue.component';
import Footer from '../../component/footer/footer.component';
import IntroducionData from './introduction_data.js';
import CardList  from '../cardList/card_list.component';
// import PaginationCard from '../paginate/pagebutton_card/pagebutton_card.component';
import MONSTER_DATA from '../paginate/pagebutton/monster.data';
class RecruitmentPage extends Component  {
  constructor(props){
    super(props)
    this.state={
      renderData:MONSTER_DATA,
    };
  }
  render (){
    return (
        <div className="RecruitmentPage">
          
          <h1>Fantuan 团建</h1>
          <Slideshow />
          {/* <JobList /> */}
          <Fantuan_value />
          <Pagination {...this.state} ItemComponent={Job_Item}/>
          <Footer />
          {/* <CardList {...this.state}/> */}
        </div>
      );
  }
}

export default RecruitmentPage;