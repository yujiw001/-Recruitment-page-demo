// =================================================================
// Program: locale.js - the locale page in the website to hold
//          the data between pages for language switch
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import {LOCALE_SET} from '../actions/types';

export default function locale(state = {lang: 'en'}, action = {}){
    switch(action.type){
        case LOCALE_SET:
            return {lang: action.lang};
        default: 
            return state;
    }
}
