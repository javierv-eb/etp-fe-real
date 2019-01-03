import React from 'react';
import _ from 'lodash';

const withHocTest = (utils, Component) => {
    return class HocTest extends React.PureComponent {
        render() {
            return (
                <Component 
                    onAlgo={utils.callFn}
                    {...this.props}
                />
            )
        }
    }

}

export default withHocTest;