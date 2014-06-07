'use strict';

angular.module('clickQuestApp')
  .controller('MainCtrl', ['$interval', '$routeParams', '$scope', 'Character', function ($interval, $routeParams, $scope, Character) {

    $scope.character = new Character({
      startingTask: $routeParams.root || 'root'
    });

    $interval(function() {
      $scope.character.tick();
    }, 1000);
  }]);
