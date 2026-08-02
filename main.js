const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;

function createWindow() {

    win = new BrowserWindow({

        width: 420,
        height: 420,

        frame: false,
        transparent: true,

        alwaysOnTop: true,
        resizable: false,

        skipTaskbar: false,

        webPreferences: {

            nodeIntegration: true,
            contextIsolation: false

        }

    });

    win.loadFile("index.html");

    const { width, height } = require("electron").screen.getPrimaryDisplay().workAreaSize;

    win.setPosition(
        width - 420,   
        height - 450
    );

}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {

    if (process.platform !== "darwin")
        app.quit();

});