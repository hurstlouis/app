/*global define, console, window*/
define([
    'controllers/mapcontroller',
    'widgets/edit/editTools',
    'esri/IdentityManager'
], function (MapController, EditTools, esriID) {
    'use strict';
    esriID.setProtocolErrorHandler(function () {
        console.log("Protocol mismatch error");
        return window.confirm("Protocol mismatch error ... proceed anyway");
    });
    function mapLoaded(map) {
        var editTools = new EditTools({
            map: map
        }, 'map-tools');
    }
    function _init(config) {
        var mapCtrl = new MapController(config);
        mapCtrl.load().then(mapLoaded);
    }
    return {
        init: _init
    };
});