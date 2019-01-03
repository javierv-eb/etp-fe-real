import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import {toggleLoading} from './common';
import {loadEvents, eventDetails} from './event';
import changeValue from './stepper';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {reducer as formReducer} from 'redux-form';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {browserHistory} from 'react-router';

const loadDefaultReducers = () => combineReducers({
    shouldShowLoading: toggleLoading,
    events: loadEvents,
    eventDetails,
    stepperValue: changeValue,
    form: formReducer,
    routing: routerReducer,
});

const configureStore = ({
    reducer = loadDefaultReducers(),
    initialState = {},
    middleware = [
        thunk,
        createLogger({collapsed: true}),
        routerMiddleware(browserHistory),
    ],
}) => (
    createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                ...middleware,
            )
        )
    )
);

export default configureStore;