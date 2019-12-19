import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import JoinUsModal from '../JoinUs/JoinUsModal.component';
import PAFormModal from '../JoinUs/paformmodal.component';
import ADFormModal from '../JoinUs/adformmodal.component';

import JoinUs from '../JoinUs/JoinUs.component';

const HomePage = () => {
    return(     
        <div >

            <Header />

            <div style={{padding:'30px 0 0 0'}} />

            <JoinUsModal />

            <div style={{padding:'30px 0 0 0'}} />
           
            <PAFormModal />

            <div style={{padding:'30px 0 0 0'}} />

            <ADFormModal />

            <div style={{padding:'30px 0 0 0'}} />


            <Footer />

        </div>
    );
    
}

export default withRouter(HomePage);
