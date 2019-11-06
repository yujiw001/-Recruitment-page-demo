import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
import HomePage from './component/pages/Homepage.component';
import RecruitmentPage from './component/pages/Recruitment_page.component';
import {withRouter} from 'react-router-dom';
import Header from './component/header/header.component';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <HomePage /> */}
        {/* <RecruitmentPage /> */}
        {/* <BrowserRouter> */}
        <Switch>
            <Route exact path='/' component = {HomePage}/>
            <Route exact path="/Recruitment" component = {RecruitmentPage} />
        </Switch>
        {/* </BrowserRouter> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
