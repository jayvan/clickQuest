'use strict';

angular.module('clickQuestApp')
  .factory('CombatTask', ['MonsterData', 'Task', function (MonsterData, Task) {
    var CombatTask = function(attr) {
      attr = attr || {};
      Task.call(this, attr);

      this.monster = attr.monster;
      this.monsterData = MonsterData[attr.monster];
      this.playerTurn = Math.random() > 0.5;
      this.duration = this.monsterData.size * 30;
      this.type = 'combatTask';
    };


    CombatTask.prototype = new Task();

    // Player/monster alternates attacks, get a task from one or the other
    CombatTask.prototype.getNextTask = function(character) {
      this.playerTurn = !this.playerTurn;

      if (this.playerTurn) {
        return character.getCombatTask(this.monster);
      } else {
        var enemyAttack = this.monsterData.actions[Math.floor(Math.random()*this.monsterData.actions.length)];
        var duration = Math.round(Math.random() * 5) + 5;

        return new Task({
          name: this.monster,
          description: enemyAttack,
          duration: duration,
          reward: Math.min(duration, this.duration - this.progress - 1)
        });
      }
    };

    CombatTask.prototype.rewardItems = function() {
      var rewards = [];
      for (var i = 0; i < this.monsterData.drops.length; i++) {
        if(Math.random() < 0.5) {
          rewards.push(this.monsterData.drops[i]);
        }
      }

      return rewards;
    };

    return CombatTask;
  }]);
