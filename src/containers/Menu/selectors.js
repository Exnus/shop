import { createSelector } from 'reselect';
import { getStore as getStoreGeneralMenu } from 'containers/GeneralMenu/selectors';

export const storeName = 'menu';

export function getStore(state) {
  return state.get(storeName);
}

export default createSelector(getStore, getStoreGeneralMenu, (store, storeGeneralMenu) => {
  return {
    items: storeGeneralMenu.get('items'),
    activeIndex: storeGeneralMenu.get('activeIndex'),
    openMenu: store.get('openMenu')
  };
});
