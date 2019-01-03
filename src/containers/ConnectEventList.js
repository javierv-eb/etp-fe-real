import _ from 'lodash';
import {connect} from 'react-redux';
import {loadEvents2} from '../actions/events';
import EventList from './EventList';
import {
    filterResult,
    getFieldValue,
    getFormError
} from './utils';


const mapStateToProps = (state) => {
    const {
        events,
    } = state;

    return {
        events: filterResult(
            events,
            {
                eventDate: getFieldValue(state, 'eventDate'),
                eventCategory: getFieldValue(state, 'eventCategory'),
                eventType: getFieldValue(state, 'eventType'),
                eventCost: getFieldValue(state, 'eventCost'),
            },
        ),
        searchValue: getFieldValue(state, 'searchField'),
        formError: getFormError(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onFetchEvents: () => dispatch(loadEvents2()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);
