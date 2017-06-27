'use strict';

const {app, BrowserWindow} = require('electron');
var http = require('http');

var mainWindow = null;
var closeWindow = null;

app.on('window-all-closed', () => {
  http.get('http://localhost:5000/api/shutdown', function(){
    app.quit()
  });
})

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1400,
        icon:'./idigbio_media_appliance/static/img/icon.png'
    });

    mainWindow.maximize();
    //mainWindow.loadURL('file://' + __dirname+ '/idigbio_media_appliance/templates/index.html');
    mainWindow.loadURL('http://localhost:5000/');
});
