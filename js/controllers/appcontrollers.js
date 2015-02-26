/*global define, console, window*/
define([
    'dojo/_base/array',
    'controllers/mapcontroller',
    'widgets/edit/editTools',
    'esri/toolbars/edit',
    'esri/dijit/editing/Editor',
    'esri/dijit/editing/TemplatePicker',
    'esri/IdentityManager'
], function (array, MapController, EditTools, Edit, Editor, TemplatePicker, esriID) {
    'use strict';
    esriID.setProtocolErrorHandler(function () {
        console.log("Protocol mismatch error");
        return window.confirm("Protocol mismatch error ... proceed anyway");
    });
    function mapLoaded(map) {

        var requestLayer, layers = [], templatePicker, layerInfos, settings, params, editorWidget;
        requestLayer = map.getLayer('Requests');

        layers.push(requestLayer);

        templatePicker = new TemplatePicker({
            featureLayers: layers,
            rows: 'auto',
            columns: 1
        }, 'template-div');
        templatePicker.startup();
        layerInfos = array.map(layers, function (layer) {
            return {
                featureLayer: layer
            };
        });
        settings = {
            map: map,
            templatePicker: templatePicker,
            layerInfos: layerInfos
        };
        params = {settings: settings};
        editorWidget = new Editor(params);
        editorWidget.startup();
    }

    function init(config) {
        var mapCtrl = new MapController(config);
        mapCtrl.load().then(mapLoaded);
    }
    return {
        init: init
    };
});