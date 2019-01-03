import React, {PureComponent} from 'react';

import ConnectEventList from './connectEventList2';
import ConnectSearchBar from './connectSearchBar2';

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