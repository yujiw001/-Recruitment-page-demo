import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import Registration from '../sign-in/sign-in.component';
import JoinUs from '../JoinUs/JoinUs.component';

const HomePage = () => {
    return(     
        <div >

        <JoinUs />

        </div>
    );
    
}

export default withRouter(HomePage);
