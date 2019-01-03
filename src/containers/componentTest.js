import React from 'react';

export default class ComponentTest extends React.Component {

    _handleClick = () => {
        this.props.algo();
        this.props.onAlgo();
    }
    render() {
        return (
            <div>
                <button onClick={this._handleClick}>
                    sdfdfds
                </button>
                </div>
        )
    }
}