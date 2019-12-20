// =================================================================
// Program: locale.js - the locale page in the website to hold
//          the data between pages for language switch
// Author : Bill Huang
// Date   : Oct 19 - Dec 18, 2019
// =================================================================

import { LOCALE_SET } from './types';

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang
});

export const setLocale= lang => (dispatch) => {
    localStorage.alhubLang = lang;
    dispatch(localeSet(lang));
}
