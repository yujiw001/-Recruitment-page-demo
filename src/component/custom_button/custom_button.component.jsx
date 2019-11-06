import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
const CustomButton = (props)=>{
    return(
      <div>
        <BrowserRouter>
          <Link to={props.address}>
            <button type="button" className="btn btn-info">{props.name}</button>
          </Link>
        </BrowserRouter>
      </div>
    );
}

export default CustomButton;