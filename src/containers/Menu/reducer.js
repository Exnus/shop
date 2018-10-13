import { fromJS, Map } from 'immutable';

import { TOGGLE_MENU } from './constants';
import { storeName } from './selectors';

const initialState = fromJS({
  openMenu: false
});

function toggleMenu(state) {
  return state.update('openMenu', value => !value);
}

export default {
  [storeName]: function(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_MENU:
        return toggleMenu(state);
      default:
        return state;
    }
  }
};
