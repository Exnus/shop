import { connect } from 'react-redux';
import MenuBurger from 'components/MenuBurger';
import { toggleMenu } from 'containers/Menu/actions';
import selector from './selectors';

const mapStateToProps = state => selector(state);

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(toggleMenu());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuBurger);
