import {
    ADD_VALUE,
    SUBTRACT_VALUE,
    RESET_VALUE
} from '../actions/stepper';

const changeValue = (state = 0, {type, payload}) => {
    if (type === ADD_VALUE) {
        state = state + payload.value;
    }

    if (type === SUBTRACT_VALUE) {
        state = state - payload.value;
    }

    if (type === RESET_VALUE) {
        state = payload.value;
    }

    return state;
};

export default changeValue;