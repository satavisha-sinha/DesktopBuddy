const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");

let win;
let tray;

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {

    app.quit();

}

app.on("second-instance", () => {

    if (win) {

        if (win.isMinimized()) {

            win.restore();

        }

        win.show();

        win.focus();

    }

});

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

    tray = new Tray(path.join(__dirname, "Assets", "icon.ico"));

    const contextMenu = Menu.buildFromTemplate([
        {
            label: "Open Buddy",
            click: () => {
                win.show();
            }
        },
        {
            label: "Hide Buddy",
            click: () => {
                win.hide();
            }
        },
        {
            type: "separator"
        },
        {
            label: "Exit",
            click: () => {

                app.isQuiting = true;
                app.quit();

            }
        }
    ]);

    tray.setToolTip("DesktopBuddy 🌸");
    tray.setContextMenu(contextMenu);

    tray.on("double-click", () => {

        if (win.isMinimized()) {
            win.restore();
        }

        win.show();
        win.focus();

    });

    win.on("close", (event) => {

        if (!app.isQuiting) {

            event.preventDefault();

            win.hide();

        }

    });

    const { width, height } = require("electron").screen.getPrimaryDisplay().workAreaSize;

    win.setPosition(
        width - 420,   
        height - 450
    );

}

app.whenReady().then(() => {

    app.setLoginItemSettings({
        openAtLogin: true
    });

    createWindow();

});

app.on("window-all-closed", () => {

    if (process.platform !== "darwin")
        app.quit();

});