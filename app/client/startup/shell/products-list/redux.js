import { createActions, handleActions } from 'redux-actions';

export const { addProductToCart, removeProductFromCart } = createActions('ADD_PRODUCT_TO_CART', 'REMOVE_PRODUCT_FROM_CART');

let counter = 0;

export default handleActions({
  [addProductToCart]: state => [
    ...state,
    ++counter
  ],
  [removeProductFromCart]: (state, { payload: {id} }) => state.find(x => x !== id)
}, []);