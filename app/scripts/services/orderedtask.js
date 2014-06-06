'use strict';

// A task with a set order of sub tasks which occur in order

angular.module('clickQuestApp')
  .factory('OrderedTask', ['Task', function (Task) {

    var OrderedTask = function(attr) {
      attr = attr || {};
      attr.subTasks = attr.subTasks || [];
      Task.call(this, attr);

      this.subTasks = attr.subTasks;
      attr.duration = this.subTasks.length;
      this.type = 'orderedTask';
    };

    OrderedTask.prototype = new Task();

    OrderedTask.prototype.addProgress = function() {
      this.progress++;
    };

    OrderedTask.prototype.getNextTask = function() {
      return this.subTasks[this.progress];
    };

    OrderedTask.prototype.getEffectiveDuration = function() {
      var sum = 0;
      for (var i = 0; i < this.subTasks.length; i++) {
        sum += this.subTasks[i].getDuration();
      }
    };

    OrderedTask.prototype.getDuration = function() {
      return this.getEffectiveDuration();
    };

    return OrderedTask;
  }]);
