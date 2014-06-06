'use strict';

angular
  .module('clickQuestApp', [
    'ngRoute',
    'RecursionHelper'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/edit_tasks', {
        templateUrl: 'views/edit_tasks.html',
        controller: 'TaskEditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
