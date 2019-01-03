import {
    LOAD_EVENTS_SUCCESS as loadEventSuccessAction,
    LOAD_EVENTS_FAILED as loadEventFailedAction,
    LOAD_EVENT_DETAIL_FAILED as loadEventDetailFailedAction,
    LOAD_EVENT_DETAIL_SUCCESS as loadEventDetailSuccessAction,
} from '../actions/events';

export const loadEvents = (state = [], {type, payload}) => {
    let currentState = state;

    if (type === loadEventSuccessAction) {
        currentState = payload.events;
    }

    if (type === loadEventFailedAction) {
        currentState = [];
    }

    return currentState;
};

export const eventDetails = (state = {}, {type, payload}) => {
    let currentState = state;

    if (type === loadEventDetailSuccessAction) {
        currentState = payload.events;
    }

    if (type === loadEventDetailFailedAction) {
        currentState = [];
    }

    return currentState;
};
