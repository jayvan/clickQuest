'use strict';

angular.module('clickQuestApp')
  .factory('Character',['Task', 'TaskManager', function (Task, TaskManager) {

    // startingTask: The name of the first task the character does
    var Character = function(attr) {
      this.name = 'Jayvan';
      this.race = 'Goblin';
      this.klass = 'Warrior';
      this.level = 1;
      this.tasks = [];
      this.tasks.unshift(TaskManager.getTask(attr.startingTask));
      this.fillUpTasks();
    };

    // Return the characters current active task
    Character.prototype.activeTask = function() {
      return this.tasks[0];
    };

    // Return the characters longterm tasks (hides root)
    Character.prototype.longTasks = function() {
      if (this.tasks[this.tasks.length-1].name === 'root') {
        return this.tasks.slice(1, this.tasks.length - 1);
      } else {
        return this.tasks.slice(1);
      }
    };

    // Keep taking on new tasks until we have a base task
    Character.prototype.fillUpTasks = function() {
      while (this.tasks[0].type !== 'task') {
        var nextTask = this.tasks[0].getNextTask(this);
        if (typeof(nextTask) === 'string') {
          nextTask = TaskManager.getTask(nextTask);
        }
        this.tasks.unshift(nextTask);
      }
    };

    // Keep completing tasks until we reach an incomplete onej
    Character.prototype.completeTasks = function() {
      while (this.tasks[0].isCompleted()) {
        var currentTask = this.tasks[0];
        this.tasks.shift();
        this.tasks[0].addProgress(currentTask.reward);
      }
    };

    // Do progress on the characters active task
    Character.prototype.tick = function(progress) {
      progress = progress || 1;

      if (this.tasks[0].isCompleted()) {
        this.completeTasks();
        this.fillUpTasks();
      } else {
        this.tasks[0].addProgress(progress);
      }

    };

    // Get a combat task based on current weapon
    Character.prototype.getCombatTask = function() {
      return new Task({
        name: 'Attacking',
        description: 'You punch the enemy',
        duration: Math.round(Math.random() * 10) + 5,
        reward: 10
      });
    };

    return Character;
  }]);
