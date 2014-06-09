'use strict';

angular.module('clickQuestApp')
  .controller('MainCtrl', ['$interval', '$routeParams', '$scope', 'Character', function ($interval, $routeParams, $scope, Character) {

    if ($routeParams.root) {
      $scope.character = new Character({
        startingTask: $routeParams.root || 'root'
      });
    } else {
      var saveData = JSON.parse(localStorage.getItem('character'));
      $scope.character = new Character(saveData);
    }

    $interval(function() {
      $scope.character.tick(0.05);
    }, 50);
  }]);
