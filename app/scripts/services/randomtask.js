'use strict';

angular.module('clickQuestApp')
  .factory('RandomTask', ['OrderedTask', 'TaskData', function (OrderedTask, TaskData) {

    var RandomTask = function(attr) {
      attr = attr || {};
      OrderedTask.call(this, attr);

      this.duration = attr.duration;
      this.type = 'randomTask';
    };

    RandomTask.prototype = new OrderedTask();

    RandomTask.prototype.addProgress = function(ticks) {
      this.progress = Math.min(this.progress + ticks, this.duration);
      console.log(this.name + " is now " + this.progress + "/" + this.duration);
    };

    RandomTask.prototype.getNextTask = function() {
      var weightSum = 0;
      var i = 0;
      for (i = 0; i < this.subTasks.length; i++) {
        weightSum += TaskData[this.subTasks[i]].weight;
      }

      var roll = Math.floor(Math.random() * weightSum);
      for (i = 0; i < this.subTasks.length; i++) {
        roll -= TaskData[this.subTasks[i]].weight;
        if (roll <= 0) {
          return this.subTasks[i];
        }
      }

      new Error('Random task didn\'t roll a new sub task');
    };

    RandomTask.prototype.getEffectiveDuration = function() {
      var sum = 0;
      var weightSum = 0;
      for (var i = 0; i < this.subTasks.length; i++) {
        sum += this.subTasks[i].getEffectiveDuration() * this.subTasks[i].weight;
        weightSum += this.subTasks[i].weight;
      }

      var avg = sum/weightSum;
      return this.duration / avg;
    };

    return RandomTask;
  }]);
