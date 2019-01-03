import React, {PureComponent} from 'react';

export default class EventDetail extends PureComponent {    

    componentDidMount() {
        this.props.loadEventDataFromRouterParam();
    }

    _createMarkup(eventDetails) {
        return {__html: JSON.stringify(eventDetails)};
    }

    render() {
        const {
            eventDetails,
        } = this.props;

        return (
            <div dangerouslySetInnerHTML={this._createMarkup(eventDetails)} />
        );
    }
}