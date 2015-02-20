/*global define, console*/
define([
    'controllers/mapcontroller',
    'esri/IdentityManager'
], function (MapController) {
    'use strict';

    function mapLoaded(map) {

    }

    function init(config) {
        var mapCtrl = new MapController(config);
        mapCtrl.load().then(mapLoaded);
    }
    return {
        init: init
    };
});