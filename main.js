const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1150,
    height: 850,
    autoHideMenuBar: true
  });
  
  // This tells the .exe to load your live Neocities site
  win.loadURL('https://retropatch.neocities.org/chat');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
