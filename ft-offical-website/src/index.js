// =================================================================
// Program: index.js - the index page as entry in the website 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { localeSet} from './actions/locale';

import './index.css';
import App from './App';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.alhubLang) {
    store.dispatch(localeSet(localStorage.alhubLang));
}

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider> 
    ), document.getElementById('root'));
