const { app, BrowserWindow, ipcMain, dialog } = require('electron')

let win

function createWindow() {
    win = new BrowserWindow({ width: 640, height: 480 })
    win.loadFile('index.html')
    win.webContents.openDevTools()
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', (createWindow))

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})

ipcMain.on("btnclick", (event, arg) => {
    var response = "Hello " + arg + ".How are you today?"
    event.sender.send("btnclick-task-finished", response);
})