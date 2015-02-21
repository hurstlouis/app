/*global define, console*/
define([
    'dojo/_base/array',
    'controllers/mapcontroller',
    'esri/dijit/editing/TemplatePicker',
    'esri/IdentityManager'
], function (array, MapController, TemplatePicker, esriID) {
    'use strict';
    esriID.setProtocolErrorHandler(function(){
		console.log("Protocol mismatch error");
		return window.confirm("Protocol mismatch error ... proceed anyway");
	});
    function mapLoaded(map) {
        var requestLayer, layers = [], templatePicker;
        requestLayer = map.getLayer('Requests');
        templatePicker = new TemplatePicker({
            featureLayers: layers,
            rows: 'auto',
            columns: 1
        }, 'template-div');
    }

    function init(config) {
        var mapCtrl = new MapController(config);
        mapCtrl.load().then(mapLoaded);
    }
    return {
        init: init
    };
});