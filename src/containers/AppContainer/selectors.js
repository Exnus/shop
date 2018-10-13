import { createSelector } from 'reselect';
import { getStore as getStoreCart } from 'containers/Cart/selectors';
import { getStore as getStoreMenu } from 'containers/Menu/selectors';

export default createSelector(getStoreCart, getStoreMenu, (storeCart, storeMenu) => {
  return {
    openCart: storeCart.get('openCart'),
    openMenu: storeMenu.get('openMenu')
  };
});
