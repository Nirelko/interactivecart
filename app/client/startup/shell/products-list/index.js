import { connect } from 'react-redux';

import ProductsList from './products-list';
import { removeProductFromCart } from './redux';

export default connect(
  ({cart}) => ({
    cart
  }),
  dispatch => ({
    removeProductFromCart ({id}) {
      return dispatch(removeProductFromCart(id));
    }
  })
)(ProductsList);