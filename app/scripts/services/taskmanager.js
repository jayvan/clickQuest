'use strict';

angular.module('clickQuestApp')
  .factory('TaskManager', ['OrderedTask', 'RandomTask', 'Task', 'TaskData', 'UnorderedTask', function (OrderedTask, RandomTask, Task, TaskData, UnorderedTask) {
    var exports = {};

    exports.serialize = function(task) {
      return JSON.stringify(task.serialize(),{},2);
    };

    exports.getNewTask = function(taskName) {
      var taskInfo = angular.copy(TaskData[taskName]);

      if (taskInfo.subTasks) {
        taskInfo.subTasks = taskInfo.subTasks.map(function(subTaskName) {
          return exports.getNewTask(subTaskName);
        });
      }

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

    return exports;
  }]);
