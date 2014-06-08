'use strict';

angular.module('clickQuestApp')
  .controller('TaskEditCtrl', ['$routeParams', '$scope', 'MonsterData', 'TaskManager', function ($routeParams, $scope, MonsterData, TaskManager) {

    var root = $routeParams.root || 'root';

    $scope.rootTask = TaskManager.getTaskTree(root);
    $scope.activeTask = $scope.rootTask;

    $scope.textOutput = function() {
      return TaskManager.serialize($scope.rootTask);
    };

    $scope.monsters = MonsterData;
  }]);
