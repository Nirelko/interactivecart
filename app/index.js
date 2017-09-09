import 'dotenv-extended/config';
import { app, globalShortcut } from 'electron';

import MainWindow from './main';
import './mongo';

app.on('ready', () => {
  const mainWindow = new MainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    globalShortcut.unregisterAll();
    app.quit();
  }
});