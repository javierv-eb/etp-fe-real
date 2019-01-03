import _ from 'lodash';
import {connect} from 'react-redux';
import {
    addValue,
    subtractValue,
    resetValue
} from '../../actions/stepper';
import Stepper from '../../components/stepper/Stepper';

const mapStateToProps = (state) => {
    const {
        stepperValue,
    } = state;
    return {
        stepperValue: stepperValue ? stepperValue : 0,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch(addValue()),
        onSubtract: () => dispatch(subtractValue()),
        onReset: () => dispatch(resetValue())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Stepper);
