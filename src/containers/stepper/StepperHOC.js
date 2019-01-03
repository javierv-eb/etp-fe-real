import React from 'react';

const withStepperHoc = (Component) => (
    class StepperHoc extends React.PureComponent {
        state = {
            stepperValue: 0,
        }

        _handleAddStepperValue = () => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    stepperValue: prevState.stepperValue + 1,
                };
            });
        }
        _handleSubtractStepperValue = () => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    stepperValue: prevState.stepperValue - 1,
                };
            });
        }        
        _handleResetStepperValue = () => {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    stepperValue: 0,
                };
            });
        }

        render() {
            console.log(this.props)
            return (
                <Component
                    stepperValue={this.state.stepperValue}
                    onAdd={this._handleAddStepperValue}
                    onSubtract={this._handleSubtractStepperValue}
                    onReset={this._handleResetStepperValue}
                />
            );
        }
    }
);

export default withStepperHoc;