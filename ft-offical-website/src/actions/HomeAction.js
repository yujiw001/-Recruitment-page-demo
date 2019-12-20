import {SWITCH_LOCALEN} from './types.js/index.js';

export function changeLocale (currLocale) {
    return {
        type: SWITCH_LOCALEN,
        data: currLocale
    };
}
