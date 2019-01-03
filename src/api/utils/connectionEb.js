import eventbrite from 'eventbrite';

const {api_key: token} = process.env;

const sdk = eventbrite({token, baseUrl: 'https://www.evbqaapi.com/v3'});

export const request = sdk.request;
