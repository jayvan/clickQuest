'use strict';

angular.module('clickQuestApp')
  .controller('MainCtrl', ['$interval', '$scope', 'Character', function ($interval, $scope, Character) {
    $scope.character = new Character();

    $interval(function() {
      $scope.character.tick();
    }, 1000);
  }]);
