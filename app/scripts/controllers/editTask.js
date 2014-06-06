'use strict';

angular.module('clickQuestApp')
  .controller('TaskEditCtrl', ['$scope', 'TaskManager', function ($scope, TaskManager) {

    $scope.testTask = TaskManager.getNewTask('root');
    console.log("YEL");

    $scope.textOutput = function() {
      return TaskManager.serialize($scope.testTask);
    };
  }]);
