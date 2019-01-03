import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from '../components/common/Backdrop';
import Spinner from '../components/common/Spinner';
import CommonLayout from '../components/common/layout/CommonLayout';
import {browserHistory} from 'react-router';
import Button from 'eventbrite_design_system/button/Button';

const PageLoading = ({shouldShowLoading}) => {
    let pageLoading = null;

    if (shouldShowLoading) {
        pageLoading = (
            <div>
                <Backdrop
                    show={shouldShowLoading}
                />
                <Spinner />
            </div>
        );
    }

    return pageLoading;
};

export default class PageStructure extends React.PureComponent {

    static propTypes = {
        shouldShowLoading: PropTypes.bool,
        title: PropTypes.string,
        children: PropTypes.node,
    }

    _handleNavigation() {
        browserHistory.push('/');
    }

    render() {
        const {
            shouldShowLoading,
            title,
            children,
            location: {
                pathname,
            },
        } = this.props;

        let goBackButton;

        if (pathname !== '/') {
            goBackButton = (
                <div className="eds-align--right eds-l-pad-top-10">
                    <Button 
                        onClick={this._handleNavigation}
                    >
                        Go Back!!!
                    </Button>
                </div>
            );
        }
        return (
            <main>
                <PageLoading
                    shouldShowLoading={shouldShowLoading}
                />
                <CommonLayout
                    title={title}
                >
                    {children}    
                </CommonLayout>
                {goBackButton}
            </main>
        );
    }
}
