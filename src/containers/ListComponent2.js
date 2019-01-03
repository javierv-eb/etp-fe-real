import React, {PureComponent} from 'react';

import ConnectEventList from './ConnectEventList';
import ConnectSearchBar from './ConnectSearchBar';

export default class ListComponents extends PureComponent {
    render() {
        return (
            <div>
                <ConnectSearchBar />
                <ConnectEventList />
            </div>
        );
    }
}