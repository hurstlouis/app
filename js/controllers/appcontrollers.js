/*global define, console*/
define([
    'controllers/mapcontroller',
    'widgets/edit/editTools'
], function (MapController, EditTools) {
    'use strict';

    function mapLoaded(map) {
        var editTools = new EditTools({
            map: map
        }, 'map-tools');
    }

    function init(config) {
        var mapCtrl = new MapController(config);
        mapCtrl.load().then(mapLoaded);
    }
    return {
        init: init
    };
});