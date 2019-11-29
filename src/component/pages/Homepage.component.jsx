import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';

const HomePage = () => {
    return(
        
        <div >

            <Header />
            
            <Footer />
        </div>
    );
    
}

export default withRouter(HomePage);
