import {push} from 'react-router-redux';
import {showLoading, hideLoading} from './common';
import {fetchEvents, fetchEvents2, fetchEventDetail} from '../api/event';

export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_FAILED = 'LOAD_EVENTS_FAILED';

export const LOAD_EVENT_DETAIL_SUCCESS = 'LOAD_EVENT_DETAIL_SUCCESS';
export const LOAD_EVENT_DETAIL_FAILED = 'LOAD_EVENT_DETAIL_FAILED';


export const loadEventSuccess = (events) => ({
    type: LOAD_EVENTS_SUCCESS,
    payload: {
        events,
    },
});

export const loadFailedSuccess = () => ({
    type: LOAD_EVENTS_FAILED,
});

export const loadEventDetailSuccess = (events) => ({
    type: LOAD_EVENT_DETAIL_SUCCESS,
    payload: {
        events,
    },
});

export const loadEventDetailFailed = () => ({
    type: LOAD_EVENT_DETAIL_FAILED,
});

export const loadEvents = (searchParam = null) => async(dispatch) => {
    dispatch(showLoading());
    try {
        dispatch(loadEventSuccess(await fetchEvents(searchParam)));
    } catch(err) {
        dispatch(loadFailedSuccess());
        dispatch(hideLoading());
        throw err;
    }
    dispatch(hideLoading());
    
};

export const loadEvents2 = (searchParam = null) => async(dispatch) => {
    dispatch(showLoading());
    try {
        dispatch(loadEventSuccess(await fetchEvents2(searchParam)));
    } catch(err) {
        dispatch(loadFailedSuccess());
        dispatch(hideLoading());
        throw err;
    }
    dispatch(hideLoading());
    
};

export const loadEventDetails = (eventId) => async(dispatch) => {
    dispatch(showLoading());
    try {
        dispatch(loadEventDetailSuccess(await fetchEventDetail(eventId)));
    } catch(err) {
        dispatch(loadEventDetailFailed());
        dispatch(hideLoading());
        throw err;
    }
    dispatch(hideLoading());
};

export const searchDetails = (eventId) => (dispatch) => (
    dispatch(push(`/events/${eventId}/`))
);
