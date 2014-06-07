'use strict';

angular.module('clickQuestApp')
  .factory('TaskManager', ['CombatTask', 'OrderedTask', 'RandomTask', 'Task', 'TaskData', 'UnorderedTask', function (CombatTask, OrderedTask, RandomTask, Task, TaskData, UnorderedTask) {
    var exports = {};

    exports.serialize = function(task) {
      return JSON.stringify(task.serialize(),{},2);
    };

    // Gets a task from the data and constructs it
    exports.getTask = function(taskName) {
      var taskInfo = angular.copy(TaskData[taskName]);
      return exports.constructTask(taskInfo);
    };

    exports.constructTask = function(taskInfo) {
      switch(taskInfo.type) {
        case 'task':
          return new Task(taskInfo);
        case 'orderedTask':
          return new OrderedTask(taskInfo);
        case 'unorderedTask':
          return new UnorderedTask(taskInfo);
        case 'randomTask':
          return new RandomTask(taskInfo);
        case 'combatTask':
          return new CombatTask(taskInfo);
      }
    };

    // Recursively constructs a task and subtasks
    exports.getTaskTree = function(taskName) {
      var taskInfo = angular.copy(TaskData[taskName]);
      taskInfo.subTasks = taskInfo.subTasks || [];


      var subTasks = taskInfo.subTasks.map(function(subTaskName) {
        return exports.getTaskTree(subTaskName);
      });

      var task = exports.getTask(taskName);
      task.subTasks = subTasks;
      return task;
    };

    return exports;
  }]);
