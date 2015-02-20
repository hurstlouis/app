/*global define*/
/*jslint nomen: true*/
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    'dojo/dom-class',
    'text!widgets/edit/editTools.tpl.html'
], function (
    declare,
    lang,
    on,
    _WidgetBase,
    _TemplatedMixin,
    domClass,
    template
) {
    'use strict';
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString: template,
        options: {},
        editing: false,
        map: null,

        constructor: function (options) {
            this.options = options || {};
            this.map = this.options.map;
        },
        postCreate: function () {
            this.own(
                on(this.editNode, 'click', lang.hitch(this, '_addRequest'))
            );
        },

        _addRequest: function () {
            this.editing = !this.editing;
            this._toogleEditButton();
        },

        _toogleEditButton: function () {
            if (this.editing) {
                this.editNode.innerHTML = 'Adding Request';
            } else {
                this.editNode.innerHTML = 'Add Request';
            }
            domClass.toggle(this.editNode, 'btm-primary btn-success');
        }
    });
});
/*jslint nomen: false*/