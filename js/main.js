/*global require*/
require([
    'controllers/appcontrollers',
    'services/mapservices',
    'dojo/domReady!'
], function (appCtrl, mapServices) {
    "use strict";
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