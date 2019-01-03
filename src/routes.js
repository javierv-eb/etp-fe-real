import React from 'react';
import {Route, IndexRoute, browserHistory, createMemoryHistory} from 'react-router';

import ConnectPageStructure from './containers/ConnectPageStructure';
import withStepperHoc from './containers/stepper/StepperHOC';
import Stepper from './components/stepper/Stepper';
import ConnectStepper from './containers/stepper/connectStepper';
import ListComponent from './containers/ListComponents';
import ListComponent2 from './containers/ListComponent2';
import IndexScreen from './components/IndexComponent';
import connectEventDetail from './containers/connectEventDetail';
import EventDetail from './components/EventDetail';

const BASE_URL = '/';
const EVENT_DETAILS_URL = '/events/:eventId/';

export const getHistory = () => {
    const hasBrowserHistory = typeof(browserHistory) !== 'undefined' && process.env.NODE_ENV !== 'test';

    return hasBrowserHistory ? browserHistory : createMemoryHistory();
};

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };
    const stateStepper = withStepperHoc(Stepper);

    return (
        <Route path={BASE_URL} component={ConnectPageStructure}>
            <IndexRoute component={IndexScreen} />
            <Route path={'/stepper-1'}component={stateStepper} />
            <Route path={'/stepper'} component={ConnectStepper} />
            <Route path={'/list'} component={ListComponent} />
            <Route path={'/list-2'} component={ListComponent2} />
            <Route path={EVENT_DETAILS_URL} component={connectEventDetail(EventDetail)} />
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;
