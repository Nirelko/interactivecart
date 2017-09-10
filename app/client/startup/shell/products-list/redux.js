import { createActions, handleActions } from 'redux-actions';
import _ from 'lodash';

export const { addProductToCart, removeProductFromCart } = createActions('ADD_PRODUCT_TO_CART', 'REMOVE_PRODUCT_FROM_CART');

export default handleActions({
  [addProductToCart]: (state, {payload: product}) => {
    const newState = {...state};

    if (!newState[product.id]) {
      newState[product.id] = {
        count: 0,
        details: product
      };
    }

    newState[product.id].count++;

    return newState;
  },
  [removeProductFromCart]: (state, { payload: {id} }) => _.pickBy(state, (value, key) => key !== id)
}, {});