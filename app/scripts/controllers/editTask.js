'use strict';

angular.module('clickQuestApp')
  .controller('TaskEditCtrl', ['$scope', 'TaskManager', function ($scope, TaskManager) {

    $scope.testTask = TaskManager.getTaskTree('root');

    $scope.textOutput = function() {
      return TaskManager.serialize($scope.testTask);
    };
  }]);
