import { createActions, handleActions } from 'redux-actions';
import _ from 'lodash';

export const { addProductToCart, removeProductFromCart } = createActions('ADD_PRODUCT_TO_CART', 'REMOVE_PRODUCT_FROM_CART');

export default handleActions({
  [addProductToCart]: (state, {payload: id}) => {
    const newState = {...state};

    if (!newState[id]) {
      newState[id] = 0;
    }

    newState[id]++;

    return newState;
  },
  [removeProductFromCart]: (state, { payload: {id} }) => _.pickBy(state, (value, key) => key !== id)
}, {});