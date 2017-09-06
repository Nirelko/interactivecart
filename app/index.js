const { app, globalShortcut } = require('electron');
const MainWindow = require('./main');

app.on('ready', () => {
  const mainWindow = new MainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    globalShortcut.unregisterAll();
    app.quit();
  }
});