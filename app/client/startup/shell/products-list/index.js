import { connect } from 'react-redux';

import ProductsList from './products-list';
import { addProductToCart, removeProductFromCart } from './redux';

export default connect(
  ({cart}) => ({
    cart
  }),
  dispatch => ({
    addProductToCart ({id}) {
      return dispatch(addProductToCart(id));
    },
    removeProductFromCart ({id}) {
      return dispatch(removeProductFromCart(id));
    }
  })
)(ProductsList);