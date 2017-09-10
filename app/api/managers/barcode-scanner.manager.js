import { globalShortcut } from 'electron';
import debounce from 'debounce';
import _ from 'lodash';

import Product from '../../mongo/models/product';

export default class BarcodeScannerManager {
  constructor () {
    this.onScansCallbacks = {};

    this._registerToKeysPress();
  }

  _registerToKeysPress () {
    let barcode = [];

    const sendBarcode = debounce(() => {
      const id = _.join(barcode, '');

      return Product.findOne({ id }).select('-__v -_id')
        .then(result => {
          const product = result.toJSON();

          _.forIn(this.onScansCallbacks, callback => callback(product));
          barcode = [];
        })
        .catch(console.log); // TODO: Add a logger
    }, 100);

    [...new Array(10).keys()].forEach(number => globalShortcut.register(`${number}`, () => {
      barcode.push(number);
      sendBarcode();
    }));
  }

  register (key, callback) {
    if (!this.onScansCallbacks[key]) {
      this.unregister(key);
    }

    this.onScansCallbacks[key] = callback;

    return () => this.unregister(key);
  }
  unregister (key) {
    delete this.onScansCallbacks[key];
  }
}