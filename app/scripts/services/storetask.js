'use strict';

angular.module('clickQuestApp')
  .factory('StoreTask', ['ItemManager', 'OrderedTask', 'Task', function (ItemManager, OrderedTask, Task) {
    var StoreTask = function(attr) {
      attr = attr || {};

      attr.subTasks = [];
      attr.name = attr.name || "Selling Loot";

      attr.subTasks.push(new Task({
        name: 'Town Portal',
        description: 'Taking a portal to the market',
        duration: 10
      }));

      var sellCharacterLoot = function() {
        attr.character.sellLoot();
      };

      var lootNames = Object.keys(attr.character.loot);
      for (var i = 0; i < lootNames.length; i++) {
        var lootName = lootNames[i];
        var quantity = attr.character.loot[lootName];

        attr.subTasks.push(new Task({
          name: 'Selling Loot',
          description: 'Selling ' + quantity + ' ' + lootName,
          duration: quantity * 3,
          callback: sellCharacterLoot
        }));
      }

      if (attr.character.storeSlots.length === 0) {
        attr.character.storeSlots = [
          'weapon',
          'chest',
          'helmet',
          'glove',
          'boot'
        ];
      }

      var slot = attr.character.storeSlots.pop();
      var item = ItemManager.generateEquipmentForSlot(slot, attr.character.level);

      attr.subTasks.push(new Task({
        name: 'Spending Gold',
        description: 'Buying a ' + item.name,
        duration: 8,
        callback: function() {
          var cost = Math.round((Math.random() / 2 + 0.5) * attr.character.gold);
          attr.character.gold -= cost;
          attr.character.equip(item);
        }
      }));

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
