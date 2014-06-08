'use strict';

angular.module('clickQuestApp')
  .filter('time', function () {
    var minute = 60;
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var month = week * 4;

    return function (input) {
      if (input > month) {
        return (input / month).toFixed(1) + ' months';
      } else if (input > week) {
        return (input / week).toFixed(1) + ' weeks';
      }else if (input > day) {
        return (input / day).toFixed(1) + ' days';
      } else if (input > hour) {
        return (input / hour).toFixed(1) + ' hours';
      } else if (input > minute) {
        return (input / minute).toFixed(1) + ' minutes';
      }

      return input + ' seconds';
    };
  });
