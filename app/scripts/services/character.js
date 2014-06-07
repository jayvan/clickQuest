'use strict';

angular.module('clickQuestApp')
  .factory('Character',['TaskManager', function (TaskManager) {
    var Character = function() {
      this.tasks = [];
      this.tasks.unshift(TaskManager.getTask('root'));
      this.fillUpTasks();
    };

    // Keep taking on new tasks until we have a base task
    Character.prototype.fillUpTasks = function() {
      while (this.tasks[0].type !== 'task') {
        var nextTaskName = this.tasks[0].getNextTask();
        var nextTask = TaskManager.getTask(nextTaskName);
        this.tasks.unshift(nextTask);
      }
    };

    // Roll up completed tasks
    Character.prototype.completeTasks = function() {
      while (this.tasks[0].isCompleted()) {
        console.log("Completed: " + this.tasks[0].name);

        var currentTask = this.tasks[0];
        this.tasks.shift();
        this.tasks[0].addProgress(currentTask.reward);
      }
    };

    // Do progress on the characters active task
    Character.prototype.tick = function(progress) {
      progress = progress || 1;

      this.tasks[0].addProgress(progress);

      this.completeTasks();
      this.fillUpTasks();
    };

    return Character;
  }]);
