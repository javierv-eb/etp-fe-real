import {urllib} from 'url-lib';
import _ from 'lodash';

const checkStatus = (response) => (
    response.status >= 200 && response.status <300 ? 
        Promise.resolve(response) : 
        Promise.reject(new Error(response.statusText))
)

const parseJson = (response) => {
    try {
        return (
            response
                .json()
                .catch(() => Promise.reject(response))
        )

    } catch (error) {
        return Promise.reject(response);
    }
}

export const getFetchOptions = (
    method = 'GET',
    extraHeaders = {},
    credentials = 'same-origin'
) => {
    let additionalHeaders = {};

    if (method !== 'GET') {
        additionalHeaders = {
            'Content-Type': 'application/json',
        };
    }

    return {
        method,
        credentials,
        headers: {
            ...additionalHeaders,
            ...extraHeaders,
        },
    };
}

export const fetchApi = (
    url,
    params,
    options = getFetchOptions()
) => {
    let finalUrl = url;
    let finalHeaders; 

    if (!_.isEmpty(params)) {
        finalUrl = urllib.formatUrl(url, params);
    }

    return fetch(finalUrl, options)
        .then(checkStatus)
        .then(parseJson)
}
