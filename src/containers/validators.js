import {makeValidator} from 'eventbrite_design_system/utils/validation/validation';

export const makeHasMaxLength = (maxLength) => (value) => (
    !value || value.length <= maxLength
);
export const isFieldValid = (maxLength = 10) => (value) => {
    const maxFn = makeHasMaxLength(maxLength);

    return maxFn(value);
};

export const searchEventValidator = makeValidator({
    searchField: [
        {
            validator: isFieldValid(),
            errorMessage: 'Search Name is too long',
        },
    ],
});