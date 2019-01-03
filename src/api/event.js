import {SERVER_URL} from './common';
import {fetchApi} from './utils/connection';
import mockData from '../data/data.json';
import {SubmissionError} from 'redux-form';
import {request} from './utils/connectionEb';
import {formatUrl} from 'url-lib';
import _ from 'lodash';

const EVENT_URL = '/destination/search/';
const EVENT_DETAIL_URL = '/destination/events/';

const addField = (fieldName, fieldValue) => _.isEmpty(fieldValue) ? {} : {[fieldName]: fieldValue};
const assambleParams = (searchParams) => {
    let params;
    let pagination = {
        'page_size': 50,
    };
    let expand = {
        'expand.destination_event': [
            'primary_venue',
            'image',
            'ticket_availability',
        ],
    };

    if (searchParams) {
        let dates = [];
        let tags = [];

        if (!_.isEmpty(searchParams.eventDate)) {
            dates = [
                ...dates,
                searchParams.eventDate,
            ];
        }

        if (!_.isEmpty(searchParams.eventCategory)) {
            tags = [
                ...tags,
                searchParams.eventCategory,
            ];
        }

        if (!_.isEmpty(searchParams.eventType)) {
            tags = [
                ...tags,
                searchParams.eventType,
            ];
        }
        
        params = {
            ...params,
            ...addField('q', searchParams.eventName),
            ...addField('price', searchParams.eventCost),  
            dates,
            tags,          
        };

    }
    return {
        'event_search': {
            ...params,
            ...pagination,
        },        
        ...expand,
    };
};

export const fetchEvents = (searchParams) => (

    request(EVENT_URL, {
        method: 'POST',
        body: JSON.stringify(assambleParams(searchParams)),
    }).then(
        (result) => {
            let response;

            if (!_.isEmpty(result.events)) {
                response = {
                    events: [
                        ...result.events.results,
                    ],
                };
            }
            return Promise.resolve(response);
        }
    )

);

//export const fetchEvents = () => fetchApi(`${SERVER_URL}${EVENT_URL}`)
export const fetchEvents2 = (searchParam) => {
    if (searchParam && searchParam.eventName) {
        const {
            eventName,
        } = searchParam;
        
        if (eventName === 'error') {
            return Promise.reject(
                new SubmissionError({
                    'searchField': 'Test error',
                    _error: 'This is a test error',
                })
            );
        }

        return Promise.resolve({
            events: [
                ...mockData.events.filter(
                    (currentEvent) => currentEvent.name.toLowerCase().indexOf(eventName.toLowerCase()) !== -1
                ),
            ],
        });
    }
    return Promise.resolve(mockData);
};

export const fetchEventDetail = (eventId) => (
    request(`${EVENT_DETAIL_URL}${eventId}/`, {
        method: 'GET',
    })
);
