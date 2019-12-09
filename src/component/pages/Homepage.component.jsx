import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import Registration from '../sign-in/sign-in.component';
import CustomButton from '../custom_button/custom_button.component';
import PAForm from '../JoinUs/paform.component';
import JoinUsModal from '../JoinUs/joinusmodal.component';
import PAFormModal from '../JoinUs/paformmodal.component';

import { Modal } from 'react-bootstrap';


const HomePage = () => {
    return(     
        <div >

            <Header />
            
            <Registration />

            <JoinUsModal button='Join Now' title='Become a Driver' />
            <PAForm />
            <PAForm button='Join Us' title='Become a Partner' />



            <Footer />
        </div>
    );
    
}

export default withRouter(HomePage);
