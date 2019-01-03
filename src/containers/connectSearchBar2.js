import {connect} from 'react-redux';
import {reduxForm, reset} from 'redux-form';
import _ from 'lodash';

import SearchBar from '../components/SearchBar';
import {loadEvents} from '../actions/events';
import {searchEventValidator} from './validators';
import {isSearchDisabled} from './utils';

const FORM_NAME = 'searchBarForm';

const mapStateToProps = (state) => ({
    searchDisabled: isSearchDisabled(state),
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: ({
        searchField: eventName,
        eventDate,
        eventCategory,
        eventType,
        eventCost,

    }) => dispatch(loadEvents({
        eventName,
        eventDate,
        eventCategory,
        eventType,
        eventCost,
    })),
    onResetForm: () => (
        Promise.all([
            dispatch(reset(FORM_NAME)),
            dispatch(loadEvents()),
        ])
    ),
});

const _enhanced = _.flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    reduxForm({
        form: FORM_NAME,
        validate: searchEventValidator,
        asyncBlurFields: ['searchField'],
    })
)(SearchBar);

export default _enhanced;