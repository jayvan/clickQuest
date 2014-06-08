'use strict';

// A task with a set order of sub tasks which occur in order

angular.module('clickQuestApp')
  .factory('OrderedTask', ['Task', function (Task) {

    var OrderedTask = function(attr) {
      attr = attr || {};
      attr.subTasks = attr.subTasks || [];
      Task.call(this, attr);

      this.subTasks = attr.subTasks;
      this.duration = this.subTasks.length;
      this.type = 'orderedTask';
    };

    OrderedTask.prototype = new Task();

    // Progress to the next subtask
    OrderedTask.prototype.addProgress = function() {
      this.progress++;
    };

    // Returns the next subtask in sequence
    OrderedTask.prototype.getNextTask = function() {
      return this.subTasks[this.progress];
    };

    // Return the expected duration in seconds of the task
    OrderedTask.prototype.getEffectiveDuration = function() {
      var sum = 0;
      for (var i = 0; i < this.subTasks.length; i++) {
        sum += this.subTasks[i].getEffectiveDuration();
      }

      return sum;
    };

    OrderedTask.prototype.getDuration = function() {
      return this.getEffectiveDuration();
    };

    return OrderedTask;
  }]);
