import { ipcRenderer } from 'electron';
import { addProductToCart } from '../shell/products-list/redux';

export default dispatch => {
  ipcRenderer.on('product-scanned', (event, product) => {
    dispatch(addProductToCart(product));
  });
};