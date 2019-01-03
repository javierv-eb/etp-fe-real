import _ from 'lodash';
import {connect} from 'react-redux';
import {loadEvents, searchDetails} from '../actions/events';
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
        events,
        searchValue: getFieldValue(state, 'searchField'),
        formError: getFormError(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onFetchEvents: () => dispatch(loadEvents()),
    searchEventDetail: (eventId) => dispatch(searchDetails(eventId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventList);
