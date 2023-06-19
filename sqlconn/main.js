const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const { executeQuery } = require('./database.js');
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
    win.webContents.openDevTools();

    // Query the database and send the result to the renderer process
    executeQuery('SELECT Top 10 * FROM Claim')
      .then((result) => {
        win.webContents.send('query-result', result);
      })
      .catch((err) => {
        // Handle the error
        console.error('Error executing query:', err);
      });
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })