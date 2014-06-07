'use strict';

// A task with a set of subtasks which occur in a random order

angular.module('clickQuestApp')
  .factory('UnorderedTask', ['OrderedTask', function (OrderedTask) {

    var UnorderedTask = function(attr) {
      OrderedTask.call(this, attr);

      // shuffle the subtasks
      for (var i = this.subTasks.length - 1; i > 0; i--) {
        var newIndex = Math.floor(Math.random() * i);
        var tmp = this.subTasks[i];
        this.subTasks[i] = this.subTasks[newIndex];
        this.subTasks[newIndex] = tmp;
      }

      this.type = 'unorderedTask';
    };

    UnorderedTask.prototype = new OrderedTask();

    return UnorderedTask;
  }]);
