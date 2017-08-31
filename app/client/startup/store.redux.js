import { createStore, combineReducers } from 'redux';


import cart from './shell/products-list/redux';

export default createStore(combineReducers({
  cart
}));
