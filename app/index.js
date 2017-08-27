// const readline = require('readline');
// const _ = require('lodash');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const itemsDictionary = {
//   '7290008753111': 'Tapuchips',
//   '7290000063140': 'Shkedei Marak'
// }
// const items = {};

// rl.on('line', (code) => {
//   if(!items[itemsDictionary[code]]) {
//     items[itemsDictionary[code]] = 0;
//   }

//   items[itemsDictionary[code]]++;

//   console.log('---------------------------')
//   _.forIn(items, (value, key)=> {
//     console.log(`${key}: ${value}`);
//   });
//   console.log('---------------------------')
// });

const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400
  });

  mainWindow.loadURL('http://localhost:8000');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});