// Import required modules
const { app, BrowserWindow } = require('electron');
const sql = require('mssql');

// MSSQL database configuration
const config = {
  user: 'sa',
  password: 'ajoshi94',
 server: 'localhost',
 database: 'RMWIN_new_test',
 rejectUnauthorized: false,
 trustServerCertificate: true,
 options : {
   trustedConnection: true,
   enableArithAbort: true,
   instancename:'US-PF2HSXXY'
 },
 port:1433
};
// const config = {
//   user: 'username',
//   password: 'password',
//   server: 'server',
//   database: 'database',
// };

// Create a new Electron window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the HTML file containing the UI
  win.loadFile('index.html');

  // Connect to the MSSQL database and execute a query
  sql.connect(config, (err) => {
    if (err) {
      console.log('Database connection failed:', err);
      return;
    }

    const request = new sql.Request();
    const query = 'SELECT TOP 10 * FROM CLAIM';

    request.query(query, (err, result) => {
      if (err) {
        console.log('Query execution failed:', err);
        return;
      }

      // Send the query result to the Electron window
      win.webContents.send('queryResult', result.recordset);
    });
  });
}

// Wait for the Electron app to be ready
app.whenReady().then(createWindow);

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
