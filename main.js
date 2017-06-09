'use strict';

//var app = require('app');
const {app, BrowserWindow} = require('electron');
//var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1400,
        icon:'idigbio_media_appliance/static/img/icon.png'
    });

    //mainWindow.loadURL("http://www.google.com");
    mainWindow.maximize();
    mainWindow.loadURL('file://' + __dirname+ '/idigbio_media_appliance/templates/index.html');
});
