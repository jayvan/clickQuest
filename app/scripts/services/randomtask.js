'use strict';

// A task with a set of subtasks which randomly occur according to a weight
// Keeps going until this task has enough progress

angular.module('clickQuestApp')
  .factory('RandomTask', ['OrderedTask', 'TaskData', function (OrderedTask, TaskData) {

    var RandomTask = function(attr) {
      attr = attr || {};
      OrderedTask.call(this, attr);

      this.duration = attr.duration;
      this.type = 'randomTask';
    };

    RandomTask.prototype = new OrderedTask();

    // Add progress to this task
    RandomTask.prototype.addProgress = function(ticks) {
      this.progress = Math.min(this.progress + ticks, this.duration);
    };

    // Gets a random subtask according to the weightings
    RandomTask.prototype.getNextTask = function() {
      var weightSum = 0;
      var i = 0;
      for (i = 0; i < this.subTasks.length; i++) {
        weightSum += TaskData[this.subTasks[i]].weight;
      }

      var roll = Math.floor(Math.random() * weightSum);
      for (i = 0; i < this.subTasks.length; i++) {
        if (roll < TaskData[this.subTasks[i]].weight) {
          return this.subTasks[i];
        }
        roll -= TaskData[this.subTasks[i]].weight;
      }

      new Error('Random task didn\'t roll a new sub task');
    };


    RandomTask.prototype.subTaskChance = function(task) {
      var taskWeight = 0;
      var totalWeight = 0;

      for (var i = 0; i < this.subTasks.length; i++) {
        totalWeight += this.subTasks[i].weight;
        if (this.subTasks[i] === task) {
          taskWeight = this.subTasks[i].weight;
        }
      }

      return Math.round(taskWeight / totalWeight * 100);
    };

    // Calculates the weighted duration of the event based on subtasks
    RandomTask.prototype.getEffectiveDuration = function() {
      var sum = 0;
      var weightSum = 0;
      for (var i = 0; i < this.subTasks.length; i++) {
        sum += this.subTasks[i].reward / this.subTasks[i].duration * this.subTasks[i].weight;
        weightSum += this.subTasks[i].weight;
      }

      var avg = sum/weightSum;
      return Math.round(this.duration / avg);
    };

    return RandomTask;
  }]);
