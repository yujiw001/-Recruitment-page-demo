import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import HomePage from './component/pages/Homepage.component';
import RecruitmentPage from './component/pages/Recruitment_page.component';
import ScoringHomepage from './component/pages/Scoring_homepage.component';
import CooperationPage from './component/pages/Businesscoop.component';
import QandApage from './component/pages/Q&Apage.component';
import RecruitmentDetail from './component/pages/Recruitment_details.component';
import Header from './component/header/header.component';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <HomePage /> */}
        {/* <RecruitmentPage /> */}
        
        <Switch>
            <Route exact path='/' component = {HomePage}/>
            <Route exact path="/Recruitment" component = {RecruitmentPage} />
            <Route exact path="/Scoring" component={ScoringHomepage} />
            <Route exact path="/Scoring/Cooperation" component={CooperationPage} />
            <Route exact path="/QandA" component={QandApage} />
            <Route exact path="/Recruitment/details/:jobpost" component={RecruitmentDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
