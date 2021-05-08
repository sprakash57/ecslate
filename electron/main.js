/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow } = require('electron');

let appWindow;

const createWindow = () => {
    appWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    appWindow.loadURL("http://localhost:8080/");

    appWindow.on("closed", () => {
        appWindow = null;
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (appWindow === null) createWindow();
});
