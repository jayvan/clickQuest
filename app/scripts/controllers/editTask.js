'use strict';

angular.module('clickQuestApp')
  .controller('TaskEditCtrl', ['$routeParams', '$scope', 'MonsterData', 'TaskManager', function ($routeParams, $scope, MonsterData, TaskManager) {


    var root = $routeParams.root || 'root';
    $scope.testTask = TaskManager.getTaskTree(root);

    $scope.textOutput = function() {
      return TaskManager.serialize($scope.testTask);
    };

    $scope.monsters = MonsterData;
  }]);
