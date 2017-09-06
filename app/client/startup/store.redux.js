import { createStore, combineReducers } from 'redux';

import cart from './shell/products-list/redux';
import productScanListener from './listeners/product-scan.listener';

const store = createStore(combineReducers({
  cart
}));

export default store;

productScanListener(store.dispatch);
