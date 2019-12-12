import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import SuccessModal from '../modal/successModal.component';
import JoinUsModal from '../JoinUs/JoinUsModal.component';
import PAFormModal from '../JoinUs/paformmodal.component';
import ADFormModal from '../JoinUs/adformmodal.component';



const HomePage = () => {
    return(     
        <div >

            <Header />

            <JoinUsModal />
           
            <PAFormModal />

            <ADFormModal />

            <Footer />

        </div>
    );
    
}

export default withRouter(HomePage);
