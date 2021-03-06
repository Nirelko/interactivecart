import { BrowserWindow } from 'electron';

import BarcodeScannerManager from '../api/managers/barcode-scanner.manager';

export default class MainWindow {
  constructor () {
    this.window = new BrowserWindow({
      height: 400,
      width: 400
    });

    this.barcodeScannerManager = new BarcodeScannerManager();
    this.window.loadURL('http://localhost:8000');
    this.window.webContents.openDevTools();

    this.window.webContents.once('did-finish-load', () => {
      this.barcodeScannerManager.register('MainWindow', code => {
        this.window.webContents.send('product-scanned', code);
      });
    });
  }
};
