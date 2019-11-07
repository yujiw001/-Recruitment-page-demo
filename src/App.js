import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import HomePage from './component/pages/Homepage.component';
import RecruitmentPage from './component/pages/Recruitment_page.component';
import ScoringHomepage from './component/pages/Scoring_homepage.component';

import Header from './component/header/header.component';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* <HomePage /> */}
        {/* <RecruitmentPage /> */}
        {/* <BrowserRouter> */}
        <Switch>
            <Route exact path='/' component = {HomePage}/>
            <Route exact path="/Recruitment" component = {RecruitmentPage} />
            <Route exact path="/Scoring" component={ScoringHomepage} />
        </Switch>
        {/* </BrowserRouter> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
