'use strict';

const {app, BrowserWindow} = require('electron');


var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1400,
        icon:'idigbio_media_appliance/static/img/icon.png'
    });

    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname+ '/idigbio_media_appliance/templates/index.html');
});
