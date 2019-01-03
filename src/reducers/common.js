import {
    SHOW_LOADING as showLoadingAction,
    HIDE_LOADING as hideLoadingAction
} from '../actions/common';

export const toggleLoading = (state = false, {type}) => {
    if (type === showLoadingAction) {
        state = true;
    }

    if (type === hideLoadingAction) {
        state = false;
    }
    return state;
};
