/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var Todo = Backbone.Model.extend({
        defaults: {
          title: '',
          completed: false
        }
    });

    // return DemoModel;
});