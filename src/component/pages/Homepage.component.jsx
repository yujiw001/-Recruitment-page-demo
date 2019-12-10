import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import Registration from '../sign-in/sign-in.component';
import CustomButton from '../custom_button/custom_button.component';
import JoinUs from '../JoinUs/JoinUs.component';
import JoinUsModal from '../JoinUs/JoinUsModal.component';
import PAForm from '../JoinUs/paform.component';

import { Modal } from 'react-bootstrap';


const HomePage = () => {
    return(     
        <div >

            <Header />
           

            <JoinUs />
            <JoinUsModal button='Join Us' title='Become a driver' />



            <PAForm />

            <Footer />
        </div>
    );
    
}

export default withRouter(HomePage);
