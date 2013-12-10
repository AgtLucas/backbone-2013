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

    var myTodo = new Todo({
      title: 'Check the console...'
    });

    // return DemoModel;
});