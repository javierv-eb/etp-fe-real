import React, {PureComponent} from 'react';
import InputField from 'eventbrite_design_system/inputField/InputField';
import Icon from 'eventbrite_design_system/icon/Icon';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import Button from 'eventbrite_design_system/button/Button';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import {
    FORMATTED_DATE_MAPPING,
    FORMATTED_FORMAT_MAPPING,
    FORMATTED_CATEGORY_MAPPING,
    FORMATTED_PRICE_MAPPING
} from './constants';

const shouldDisplayError = ({error, submitFailed, touched, dirty}) => (
    !!error && (submitFailed || touched || dirty)
);

export default class SearchBar extends PureComponent {

    render() {
        const {
            handleSubmit,
            onResetForm,
            searchDisabled,
            valid,
            dirty,
        } = this.props;
        
        return (
            <div className="eds-g-cell eds-g-cell-1-1 eds-l-pad-bot-10">
                <form onSubmit={handleSubmit}>
                    <div>
                        <ValidationFormField
                            name="searchField"
                            v2={true}
                            shouldDisplayError={shouldDisplayError}
                        >
                            <InputField
                                id="search-field"
                                label="search an event"
                                prefix={<Icon type="magnifying-glass-chunky" color="grey-500" />}
                            />
                        </ValidationFormField>
                    </div>
                    <div className="eds-align--space-between">
                        <div className="eds-g-cell-1-4 eds-l-pad-right-1">
                            <ValidationFormField
                                name="eventDate"
                                v2={true}
                                shouldDisplayError={shouldDisplayError}
                            >
                                <SelectField
                                    id="eds-select-date"
                                    label="Event Date"
                                    placeholder="Any Date"
                                    values={FORMATTED_DATE_MAPPING}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell-1-4 eds-l-pad-hor-1">
                            <ValidationFormField
                                name="eventCategory"
                                v2={true}
                                shouldDisplayError={shouldDisplayError}
                            >
                                <SelectField
                                    id="eds-select-category"
                                    label="Event Category"
                                    placeholder="Any Category"
                                    values={FORMATTED_CATEGORY_MAPPING}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell-1-4 eds-l-pad-hor-1">
                            <ValidationFormField
                                name="eventType"
                                v2={true}
                                shouldDisplayError={shouldDisplayError}
                            >
                                <SelectField
                                    id="eds-select-type "
                                    label="Event Type"
                                    placeholder="Any Type"
                                    values={FORMATTED_FORMAT_MAPPING}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-g-cell-1-4 eds-l-pad-left-1">
                            <ValidationFormField
                                name="eventCost"
                                v2={true}
                                shouldDisplayError={shouldDisplayError}
                            >
                                <SelectField
                                    id="eds-select-price"
                                    label="Event Price"
                                    placeholder="Any Price"
                                    values={FORMATTED_PRICE_MAPPING}
                                />
                            </ValidationFormField>
                        </div>

                    </div>
                    <div className="eds-align--left">
                        <div className="eds-l-pad-right-2">
                            <Button 
                                style="fill"
                                type="submit"
                                disabled={searchDisabled || !valid}
                            >
                                Search Events now!!!
                            </Button>
                        </div>
                        <div className="eds-l-pad-right-2">
                            <Button 
                                onClick={onResetForm}
                                disabled={!dirty}
                            >
                                Refresh
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}