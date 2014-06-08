'use strict';

angular.module('clickQuestApp')
  .factory('StoreTask', ['OrderedTask', 'Task', function (OrderedTask, Task) {
    var StoreTask = function(attr) {
      attr = attr || {};

      attr.subTasks = [];
      attr.name = attr.name || "Selling Loot";

      attr.subTasks.push(new Task({
        name: 'Town Portal',
        description: 'Taking a portal to the market',
        duration: 10
      }));

      var lootNames = Object.keys(attr.character.loot);
      for (var i = 0; i < lootNames.length; i++) {
        var item = lootNames[i];
        var quantity = attr.character.loot[item];

        attr.subTasks.push(new Task({
          name: 'Selling Loot',
          description: 'Selling ' + quantity + ' ' + item,
          duration: quantity * 3,
          callback: function() {
            attr.character.sellLoot();
          }
        }));
      }

      attr.subTasks.push(new Task({
        name: 'Town Portal',
        description: 'Taking your portal back',
        duration: 10
      }));

      OrderedTask.call(this, attr);
    };

    StoreTask.prototype = new OrderedTask();

    return StoreTask;
  }]);
