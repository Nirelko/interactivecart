const { globalShortcut } = require('electron');
const debounce = require('debounce');
const _ = require('lodash');

module.exports = class BarcodeScannerManager {
  constructor () {
    this.onScansCallbacks = {};

    this._registerToKeysPress();
  }

  _registerToKeysPress () {
    let barcode = [];

    const sendBarcode = debounce(() => {
      const barcodeStr = _.join(barcode, '');
      
      console.log(barcodeStr);

      _.forIn(this.onScansCallbacks, callback => callback(barcodeStr));
      barcode = [];
    }, 100);

    [...new Array(10).keys()].forEach(number => globalShortcut.register(`${number}`, () => {
      barcode.push(number);
      sendBarcode();
    }));

    /*globalShortcut.register('enter', () => {
      const barcodeStr = _.join(barcode, '');

      _.forIn(this.onScansCallbacks, callback => callback(barcodeStr));
      barcode = [];
    });*/
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
};