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
      this.progress = attrs.progress || 0;
      this.callback = attrs.callback;
      this.type = 'task';
    };

    // Adds progress to the task
    Task.prototype.addProgress = function(ticks) {
      ticks = ticks || 1;
      this.progress = Math.min(this.progress + ticks, this.duration);
    };

    // Returns percentage of task completion
    // Useful for progress bars
    Task.prototype.percentComplete = function() {
      return Math.round(this.progress / this.duration * 100);
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
      return this.duration;
    };

    // Returns how long the task takes
    Task.prototype.getDuration = function() {
      return this.duration;
    };

    // Deletes the given subtask from this task
    Task.prototype.removeSubTask = function(subTask) {
      var index = this.subTasks.indexOf(subTask);
      if (index !== -1) {
        this.subTasks.splice(index, 1);
      }
    };

    // Moves a subtask up one in the list
    Task.prototype.promoteSubTask = function(subTask) {
      this.moveSubTask(subTask, -1);
    };

    // Moves a subtask down one in the list
    Task.prototype.demoteSubTask = function(subTask) {
      this.moveSubTask(subTask, 1);
    };

    // Moves a subtask relative to it's current location in the list
    Task.prototype.moveSubTask = function(subTask, delta) {
      var index = this.subTasks.indexOf(subTask);
      if (index === -1 || index + delta < 0 || index + delta >= this.subTasks.length) {
        return;
      }

      var tmp = this.subTasks[index + delta];
      this.subTasks[index + delta] = subTask;
      this.subTasks[index] = tmp;
    };

    // Adds a new subtask at the given index
    Task.prototype.addSubTask = function(index) {
      index = index || 0;
      this.subTasks.splice(index, 0, new Task());
    };

    Task.prototype.wrapSubTask = function(oldTask) {
      var index = this.subTasks.indexOf(oldTask);
      this.subTasks[index] = new Task();
      this.subTasks[index].subTasks = [oldTask];
    };

    Task.prototype.unwrapSubTask = function(oldTask) {
      var index = this.subTasks.indexOf(oldTask);
      this.removeSubTask(oldTask);
      for (var i = oldTask.subTasks.length - 1; i >= 0; i--) {
        this.subTasks.splice(index, 0, oldTask.subTasks[i]);
      }
    };

    Task.prototype.subTaskChance = function() {
      return 0;
    };

    Task.prototype.rewardItems = function() {
      return [];
    };

    // Serialize the task's raw data for the monsterData file
    Task.prototype.serialize = function(taskData) {
      var getName = function(obj) {
        return obj.name;
      };

      var blacklist = [
        '$$hashKey',
        'progress',
        'monsterData'
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
