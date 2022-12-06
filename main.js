const { app, BrowserWindow } = require('electron')

const {WebSocketServer} = require('ws');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', ()=> {
    if (process.platform !== 'darwin') app.quit()
})
/*
const wss = new WebSocketServer({port: 8080});

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        console.log('recieved: %s', data);
    });

    ws.send('something');
});
*/