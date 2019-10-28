import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Slideshow from './component/slideshow/slideshow.component';
import DropDownBox from './component/dropdown_box/dropdown_box.component';
import Header from './component/header/header.component';
// import pageButton from './component/paginate/pagebutton/pagebutton.component';
import Pagination from './component/paginate/pagebutton/pagebutton.component';
function App() {
  return (
    <div className="App">
      <Header />
      <h1>Fantuan 团建</h1>
      <Slideshow />
      <Pagination />
    </div>
  );
}

export default App;
