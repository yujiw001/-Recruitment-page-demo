import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import Registration from '../sign-in/sign-in.component';
import CustomButton from '../custom_button/custom_button.component';
import JoinUsModal from '../JoinUs/JoinUsModal.component';
import PAFormModal from '../JoinUs/paformmodal.component';

import ADFormModal from '../JoinUs/adformmodal.component';


const HomePage = () => {
    return(     
        <div >

            <Header />
           

            <JoinUsModal button='Join Us' title='Become a driver' />



            <PAFormModal />
            <ADFormModal />

            <Footer />

        </div>
    );
    
}

export default withRouter(HomePage);
