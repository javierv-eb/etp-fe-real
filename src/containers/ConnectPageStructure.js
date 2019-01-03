import _ from 'lodash';
import {connect} from 'react-redux';
import PageStructure from './PageStructure';

export const mapStateToPageStructure = (state, title = 'Dynamic Event List') => ({
    title,
    shouldShowLoading: state.shouldShowLoading,
});

export default connect(
    (state) => mapStateToPageStructure(state)
)(PageStructure);
