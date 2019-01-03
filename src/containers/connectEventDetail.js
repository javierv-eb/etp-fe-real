import {connect} from 'react-redux';
import {loadEventDetails} from '../actions/events';

const mapStateToProps = ({eventDetails = null}) => ({
    eventDetails,
});

const mapDispatchToProps = (dispatch, {params: {eventId}}) => ({
    loadEventDataFromRouterParam: () => dispatch(loadEventDetails(eventId)),
});

export default connect(mapStateToProps, mapDispatchToProps);
