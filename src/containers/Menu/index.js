import { connect } from 'react-redux';
import { toggleMenu } from './actions';
import selector from './selectors';
import Container from './Container';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClickClose: () => {
      dispatch(toggleMenu());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
