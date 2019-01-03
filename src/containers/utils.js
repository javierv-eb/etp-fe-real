import _ from 'lodash';
import {formValueSelector} from 'redux-form';

const FORM_NAME = 'searchBarForm';

export const shouldFilterValues = ({
    events,
    eventDate,
    eventCategory,
    eventType,
    eventCost,
}) => !_.isEmpty(events) && (!_.isEmpty(eventDate) || !_.isEmpty(eventCategory) || !_.isEmpty(eventCost) || !_.isEmpty(eventType));

const filterDate = (eventDate, events) => (
    {
        events: events.events.filter((event) => event),
    }
);

const filterCategory = (eventCategory, events) => (
    _.isEmpty(eventCategory) ? events : ( {
        events: events.events.filter(
            (event) => event.tags.find(
                (tag) => tag.tag === eventCategory
            )
        ),
    })
);

const filterType = (eventType, events) => (
    _.isEmpty(eventType) ? events : ( {
        events: events.events.filter(
            (event) => event.tags.find(
                (tag) => tag.tag === eventType
            )
        ),
    })
);

const filterCost = (eventCost, events) => (
    _.isEmpty(eventCost) ? events : ( {
        events: events.events.filter(
            (event) => event['ticket_availability']['is_free']
        ),
    })
);

const filterEventData = (
    events,
    {
        eventDate,
        eventCategory,
        eventType,
        eventCost,
    }
) => (
    _.flow(
        filterDate.bind(null, eventDate),
        filterCategory.bind(null, eventCategory),
        filterType.bind(null, eventType),
        filterCost.bind(null, eventCost),
    )(events)
);

export const filterResult = (
    events,
    {
        eventDate,
        eventCategory,
        eventType,
        eventCost,
    }
) => (
    shouldFilterValues({events, eventDate, eventCategory, eventType, eventCost}) ?
        filterEventData(events,
            {
                eventDate,
                eventCategory,
                eventType,
                eventCost,
            }) :
        events
);

export const getFieldValue = (state, field) => formValueSelector(FORM_NAME)(state, field);

export const getFormError = (state) => state.form[FORM_NAME] ? state.form[FORM_NAME].error : '';

export const isSearchDisabled = (state) => (
    _.isEmpty(getFieldValue(state, 'searchField')) &&
    _.isEmpty(getFieldValue(state, 'eventDate')) &&
    _.isEmpty(getFieldValue(state, 'eventCategory')) &&
    _.isEmpty(getFieldValue(state, 'eventType')) &&
    _.isEmpty(getFieldValue(state, 'eventCost'))
);
