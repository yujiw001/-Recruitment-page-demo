// =================================================================
// Program: index.js - the index page in the office website to hold
//          the data between pages 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// Note   : It was canceled
// =================================================================

import { combineReducers } from 'redux';
import home from './home.js';
import locale from './locale';

const rootReducer = combineReducers({
    home,
    locale
});

export default rootReducer;
