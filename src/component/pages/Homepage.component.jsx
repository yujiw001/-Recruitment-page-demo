import React from 'react';
import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import {withRouter} from 'react-router-dom';
import Registration from '../sign-in/sign-in.component';
import CustomButton from '../custom_button/custom_button.component';
import JoinUs from '../JoinUs/JoinUs.component';
import PAForm from '../JoinUs/paform.component';
import JoinUsModal from '../JoinUs/JoinUsModal.component';

import { Modal } from 'react-bootstrap';


const HomePage = () => {
    return(     
        <div >

            <Header />
            <div style={{'padding':'108px'}}></div>

            <div className='container'>
            <div className='row'>
                <div>
                    <h1 style={{'text-align':'left', 'font-size':'70px'}}> 
                        The Best 
                        <br />
                        Asian Food 
                        <br />
                        Delivery
                    </h1>
                    <CustomButton name='饭团外卖' address=''/>
                </div>
                <div style={{'padding-right':'450px'}}></div>
                <div>
                    <h1 style={{'text-align':'right','font-size':'70px'}}>
                        The Best 
                        <br />
                        Asian Food 
                        <br />
                        Delivery
                    </h1>
                    <CustomButton name='饭团点评' address='/Scoring'/>
                </div>
            </div>
            </div>

            <div style={{padding:'108px'}}></div>
            <Registration />

            <JoinUs />

            <Footer />
        </div>
    );
    
}

export default withRouter(HomePage);
