import { ipcRenderer } from 'electron';
import { addProductToCart } from '../shell/products-list/redux';

export default dispatch => {
  ipcRenderer.on('product-scanned', (event, id) => {
    dispatch(addProductToCart(id));
  });
};