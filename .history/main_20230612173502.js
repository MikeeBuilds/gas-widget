const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile('gas_price_widget.html');
}

app.whenReady()
  .then(() => {
    createWindow();

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
