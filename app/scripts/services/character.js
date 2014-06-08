'use strict';

angular.module('clickQuestApp')
  .factory('Character',['ItemManager', 'Task', 'TaskManager', 'WeaponData', function (ItemManager, Task, TaskManager, WeaponData) {

    // startingTask: The name of the first task the character does
    var Character = function(attr) {
      attr = attr || {};
      this.name = attr.name || 'Jayvan';
      this.race = attr.race || 'Goblin';
      this.klass = attr.klass || 'Warrior';
      this.level = attr.level || 1;
      this.experienceToLevel = attr.experienceToLevel || 60 * 5;
      this.experience = attr.experience || 0;
      this.equipment = attr.equipment || {};

      // Starter weapon
      if (this.equipment.weapon === undefined) {
        this.equip(ItemManager.generateEquipment('sword', 100));
      }

      this.tasks = [];
      if (attr.tasks !== undefined) {
        for (var i = 0; i < attr.tasks.length; i++) {
          this.tasks[i] = TaskManager.constructTask(attr.tasks[i]);
        }
      } else {
        this.tasks.unshift(TaskManager.getTask(attr.startingTask || 'root'));
      }

      this.fillUpTasks();
    };

    Character.prototype.save = function() {
      localStorage.setItem('character', JSON.stringify(this));
    };

    Character.prototype.equip = function(item) {
      this.equipment[item.slot] = item;
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

      this.save();
    };

    // Keep completing tasks until we reach an incomplete onej
    Character.prototype.completeTasks = function() {
      while (this.tasks[0].isCompleted()) {
        var currentTask = this.tasks[0];
        this.tasks.shift();
        this.tasks[0].addProgress(currentTask.reward);
        this.addExperience(currentTask.reward);
      }
    };

    Character.prototype.addExperience = function(xp) {
      this.experience += xp;
      if (this.experience >= this.experienceToLevel) {
        this.level++;
        this.experienceToLevel = Math.round(Math.pow(1.1, this.level) * 20 * 60);
        this.experience = 0;
      }
      console.log('Experience is ' + this.experience + '/' + this.experienceToLevel);
    };

    Character.prototype.percentToLevel = function() {
      return Math.round(this.experience / this.experienceToLevel * 100);
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
    Character.prototype.getCombatTask = function(monsterName) {
      var verbs = WeaponData[this.equipment.weapon.type].verbs;
      var verb = verbs[Math.floor(Math.random() * verbs.length)];
      var description = 'You ' + verb + ' the ' + monsterName + ' with your ' + this.equipment.weapon.name;
      return new Task({
        name: 'Attacking',
        description: description,
        duration: Math.round(Math.random() * 5) + 5,
        reward: Math.round(Math.random() * 5) + 5
      });
    };

    return Character;
  }]);
