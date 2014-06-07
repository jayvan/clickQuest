'use strict';

angular.module('clickQuestApp')
  .controller('MainCtrl', ['$interval', '$scope', 'Character', function ($interval, $scope, Character) {
    var character = new Character();

    $interval(function() {
      character.tick();
    }, 1000);
  }]);
