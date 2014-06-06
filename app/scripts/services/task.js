'use strict';

// A simple task with no sub tasks

angular.module('clickQuestApp')
  .factory('Task', function () {

    var Task = function(attrs) {
      attrs = attrs || {};
      this.name = attrs.name;
      this.description = attrs.description;
      this.weight = attrs.weight || 1;
      this.duration = attrs.duration || 10;
      this.reward = attrs.reward || 10;
      this.subTasks = [];
      this.progress = 0;
      this.type = 'task';
    };

    // Adds progress to the task
    Task.prototype.addProgress = function(ticks) {
      this.progress = Math.min(this.progress + ticks, this.duration);
    };

    // Returns true if the task is complete, false otherwise
    Task.prototype.isCompleted = function() {
      return this.progress >= this.duration;
    };

    // Returns the next subtask to be completed
    Task.prototype.getNextTask = function() {
      new Error('Called get next task on a base task!');
    };

    // Returns how long the task effectively takes
    // e.g. a task that takes 1 second but gives 2 seconds of progress takes
    // a half second effectively
    Task.prototype.getEffectiveDuration = function() {
      return this.reward / this.duration;
    };

    // Returns how long the task takes
    Task.prototype.getDuration = function() {
      return this.duration;
    };

    Task.prototype.removeSubTask = function(subTask) {
      var index = this.subTasks.indexOf(subTask);
      if (index !== -1) {
        this.subTasks.splice(index, 1);
      }
    };

    Task.prototype.promoteSubTask = function(subTask) {
      this.moveSubTask(subTask, -1);
    };

    Task.prototype.demoteSubTask = function(subTask) {
      this.moveSubTask(subTask, 1);
    };

    Task.prototype.moveSubTask = function(subTask, delta) {
      var index = this.subTasks.indexOf(subTask);
      if (index === -1 || index + delta < 0 || index + delta >= this.subTasks.length) {
        return;
      }

      var tmp = this.subTasks[index + delta];
      this.subTasks[index + delta] = subTask;
      this.subTasks[index] = tmp;
    };

    Task.prototype.addSubTask = function() {
      this.subTasks.push(new Task());
    };

    Task.prototype.serialize = function(taskData) {
      var getName = function(obj) {
        return obj.name;
      };

      var blacklist = [
        '$$hashKey',
        'progress'
      ];
      taskData = taskData || {};
      taskData[this.name] = {};
      for (var key in this) {
        if (blacklist.indexOf(key) !== -1) {
          continue;
        } else if (key === 'subTasks') {
          if (this.type !== 'task') {
            taskData[this.name].subTasks = this.subTasks.map(getName);
          }
        } else if (this.hasOwnProperty(key)) {
          taskData[this.name][key] = angular.copy(this[key]);
        }
      }

      for (var i = 0; i < this.subTasks.length; i++) {
        this.subTasks[i].serialize(taskData);
      }

      return taskData;
    };


    return Task;
  });
