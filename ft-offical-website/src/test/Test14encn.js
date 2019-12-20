import React, { Component, useState } from 'react';
// import { IntlProvider, FormattedMessage  } from 'react-intl';
import { FormattedMessage  } from 'react-intl';
// import zh_CN from './Test14cn';
// import en_US from './Test14en';
import Example from './Test14encn.css';

  class HelloWorld extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     lang: 'zh',
        // };
    }

    render() {

        // let messages = {};
        // messages['en'] = en_US;
        // messages['zh'] = zh_CN;

        return (
            <>
            <div id="contactusid" className="ft-about-contact-bg">
            <div className="ft-about-contact-content">

            {/* <IntlProvider local={this.state.lang} */}
              {/* messages={messages[this.state.lang]}> */}
                <FormattedMessage id="hello"/>
            {/* </IntlProvider> */}

              </div>
              </div>
            </>    
    );
}
}

export default HelloWorld;
