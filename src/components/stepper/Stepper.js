import React, {PureComponent} from 'react';
import Button from 'eventbrite_design_system/button/Button';
import Icon from 'eventbrite_design_system/icon/Icon';
import PropTypes from 'prop-types';

export default class Stepper extends PureComponent {

    static propTypes = {
        stepperValue: PropTypes.number.isRequired,
        onAdd: PropTypes.func.isRequired,
        onSubtract: PropTypes.func.isRequired,
        onReset: PropTypes.func.isRequired,
    }

    _handleAdd = () =>  this.props.onAdd();
    _handleSubtract = () => this.props.onSubtract();
    _handleReset = () => this.props.onReset();

    render() {
        const {
            stepperValue,
        } = this.props;

        return (
            <div className="eds-align--space-between">
                <div>
                    <p className="eds-g-cell eds-g-cell-1-1 eds-l-pad-bot-1">
                        <span>
                            {stepperValue}
                        </span>
                    </p>
                    <div className="eds-l-pad-bot-1">
                        <Button size="block"
                            onClick={this._handleAdd}
                        >
                            <Icon type="plus-chunky" />
                            Add
                        </Button>
                    </div>
                    <div className="eds-l-pad-bot-1">
                        <Button size="block"
                            onClick={this._handleSubtract}
                        >
                            <Icon type="minus-chunky" />
                            Subtract
                        </Button>
                    </div>
                    <div className="eds-l-pad-bot-1">
                        <Button size="block"
                            onClick={this._handleReset}
                        >
                            <Icon type="refresh-chunky" />
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}