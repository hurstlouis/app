/*global define*/
define([
    'esri/Color',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol'
], function (Color, SimpleFillSymbol, SimpleLineSymbol) {
    'use strict';
    return {
        renderSymbol: function () {
            return new SimpleFillSymbol(
                SimpleFillSymbol.STYLE_SOLID,
                new SimpleLineSymbol(
                    SimpleLineSymbol.STYLE_SOLID,
                    new Color([255, 255, 255]),
                    1
                ),
                new Color([128, 128, 128, 0.5])
            );
        }
    };
});