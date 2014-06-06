'use strict';

angular.module('clickQuestApp')
  .directive('taskEdit', ['RecursionHelper', function (RecursionHelper) {
    return {
      templateUrl: 'views/templates/task_edit.html',
      scope: {
        'task': '='
      },
      restrict: 'E',
      compile: function(element) {
        return RecursionHelper.compile(element, function() {
            // Define your normal link function here.
            // Alternative: instead of passing a function,
            // you can also pass an object with
            // a 'pre'- and 'post'-link function.
        });
      }
    };
  }]);
