'use strict';

angular.module('clickQuestApp')
  .controller('MainCtrl', ['$scope', 'OrderedTask', 'Task', 'TaskManager', function ($scope, OrderedTask, Task, TaskManager) {

    $scope.testTask = TaskManager.getNewTask('root');

    $scope.textOutput = function() {
      return TaskManager.serialize($scope.testTask);
    };
  }]);
