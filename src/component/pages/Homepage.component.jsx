import React from 'react';
import Header from '../header/header.component';
import CustomButton from '../custom_button/custom_button.component'
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';

const HomePage = () => {
    return(
        
        <div className="Homepage">

            <Header />

            <div className="Card_container">
                <h1>The Best Asian Food Delivery</h1>
                <CustomButton name='饭团外卖' address=''/>
            </div>
            <div className="Card_container">
                <h1>The Best Asian Food Delivery</h1>
                <CustomButton name='饭团点评' address='/Scoring'/>
            </div>
            <Footer />
        </div>
    );
    
}

export default withRouter(HomePage);