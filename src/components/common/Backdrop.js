import React from 'react';
import _ from 'lodash';

export default ({show, onBackgropClicked = _.noop}) => {
    let backdrop = null;

    if (show) {
        backdrop = (
            <div 
                className="backdrop"
                onClick={onBackgropClicked}
            >
            </div>
        )
    }
    return backdrop;
};
