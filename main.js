'use strict';

const {app, BrowserWindow} = require('electron');

var mainWindow = null;
var closeWindow = null;



app.on('ready', function() {

    mainWindow = new BrowserWindow({
        height: 800,
        width: 1400,
        icon:'./idigbio_media_appliance/static/img/icon.png'
    });

    mainWindow.maximize();
    //mainWindow.loadURL('file://' + __dirname+ '/idigbio_media_appliance/templates/index.html');
    mainWindow.loadURL('http://localhost:5000/');
    
    mainWindow.on('close', function(e){
        e.preventDefault();
        mainWindow.loadURL('http://localhost:5000/api/shutdown');
        mainWindow.close()
    });
});
