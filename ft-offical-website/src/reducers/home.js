// =================================================================
// Program: Home.js - the home page in the office website to hold
//          the data between pages 
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// Note   : It was canceled
// =================================================================

import * as types from '../actions/types.js';
const initialState = {
    currLocale: 'zh'
};

function Home(state = initialState, action) {
    switch (action.type) {
        case types.SWITCH_LOCALEN:
            return {
                ...state,
                currLocale: action.data,
            };
        default:
            return state;
    }
}

export default Home;
