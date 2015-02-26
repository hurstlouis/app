/*global require*/
require([
    'controllers/appcontrollers',
    'services/mapservices',
    'esri/config',
    'dojo/domReady!'
], function (appCtrl, mapServices, esriConfig) {
    "use strict";
    esriConfig.defaults.io.proxyUrl = "../proxy/proxy.ashx";
    esriConfig.defaults.io.alwaysUseProxy = false;
    appCtrl.init({
        elem: 'map-div',
        mapOptions: {
            basemap: 'gray',
            center: [-118.241, 34.0542],
            zoom: 12
        },
        layers: mapServices.loadServices()
    });
});