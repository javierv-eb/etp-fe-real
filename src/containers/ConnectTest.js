import {connect} from 'react-redux';
import hocTest from './hocTest';
import _ from 'lodash';

const connectTest = (utils, Component) => {

    const mapStateToProps = (state) => ({
        theState: state,
    });

    const mapDispatchToProps = (dispatch) => {
        return {
            algo : (a) => console.log(a)
        }
    };
    const _enhance = _.flow(
        connect(
            mapStateToProps,
            mapDispatchToProps
        ),
        hocTest.bind(this, utils),
    )
    return _enhance(Component);

};

export default connectTest;