// =================================================================
// Program: rootReducer.js - the rootReducer page in the website to
//          hold the data between pages for language switch
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import { combineReducers } from 'redux';
import locale from './locale';

const rootReducer = combineReducers({
    locale
});

export default rootReducer;
