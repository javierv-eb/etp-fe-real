import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class CommonLayout extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        children: PropTypes.node.isRequired,
    }

    render() {
        const {
            title,
            children,
        } = this.props;

        return (
            <section>
                <main>
                    <h1>{title}</h1>
                </main>
                {children}
            </section>
        );
    }
}
