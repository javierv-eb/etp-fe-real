
export const ADD_VALUE = 'ADD_VALUE';
export const SUBTRACT_VALUE = 'SUBTRACT_VALUE';
export const RESET_VALUE = 'RESET_VALUE';

export const addValue = (value) => ({
    type: ADD_VALUE,
    payload: {
        value: 1,
    },
});
export const subtractValue = (value) => ({
    type: SUBTRACT_VALUE,
    payload: {
        value: 1,
    },
});
export const resetValue = (value) => ({
    type: RESET_VALUE,
    payload: {
        value: 0,
    },
});
