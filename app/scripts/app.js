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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
