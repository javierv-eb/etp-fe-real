import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './reducers';
import {configureEventList} from './componentStrategy';

import ConnectEventList from './containers/connectEventList2';
import ConnectPageStructure from './containers/ConnectPageStructure';

import connectTest from './containers/ConnectTest';
import componentTest from './containers/componentTest';
import withHocTest from './containers/hocTest';

import withStepperHoc from './containers/stepper/StepperHOC';
import Stepper from './components/stepper/Stepper';

import ConnectStepper from './containers/stepper/connectStepper';
import ConnectSearchBar from './containers/connectSearchBar2';

import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import getRoutes from './routes';
import './app.scss';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.store = configureStore({});
        this.history = syncHistoryWithStore(browserHistory, this.store);
    }

    
    render() {

        return (
            <Provider store={this.store}>
                <Router history={this.history} routes={getRoutes()} />
            </Provider>
        );
    }
}
