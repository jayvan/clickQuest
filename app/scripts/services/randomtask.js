'use strict';

angular.module('clickQuestApp')
  .factory('RandomTask', ['OrderedTask', function (OrderedTask) {

    var RandomTask = function(attr) {
      attr = attr || {};
      OrderedTask.call(this, attr);
      this.type = 'randomTask';
    };

    RandomTask.prototype = new OrderedTask();

    RandomTask.prototype.addProgress = function(ticks) {
      this.progress = Math.min(this.progress + ticks, this.duration);
    };

    RandomTask.prototype.getNextTask = function() {
      var weightSum, i = 0;
      for (i = 0; i < this.subTasks.length; i++) {
        weightSum += this.subTasks[i].weight;
      }

      var roll = Math.floor(Math.random() * weightSum);
      for (i = 0; i < this.subTasks.length; i++) {
        roll -= this.subTasks[i].weight;
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
