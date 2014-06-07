'use strict';

angular.module('clickQuestApp')
  .factory('TaskManager', ['OrderedTask', 'RandomTask', 'Task', 'TaskData', 'UnorderedTask', function (OrderedTask, RandomTask, Task, TaskData, UnorderedTask) {
    var exports = {};

    exports.serialize = function(task) {
      return JSON.stringify(task.serialize(),{},2);
    };

    exports.getTask = function(taskName) {
      var taskInfo = angular.copy(TaskData[taskName]);

      switch(taskInfo.type) {
        case 'task':
          return new Task(taskInfo);
        case 'orderedTask':
          return new OrderedTask(taskInfo);
        case 'unorderedTask':
          return new UnorderedTask(taskInfo);
        case 'randomTask':
          return new RandomTask(taskInfo);
      }
    };

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
