'use strict';

angular.module('clickQuestApp')
  .factory('ItemManager',['BootData', 'ChestData', 'GloveData', 'HelmetData', 'WeaponData', function (BootData, ChestData, GloveData, HelmetData, WeaponData) {
    var dataSources = [BootData, ChestData, GloveData, HelmetData, WeaponData];

    var exports = {};

    exports.generateEquipmentForSlot = function(slot, level) {
      for (var i = 0; i < dataSources.length; i++) {
        if (dataSources[i].slot === slot) {
          var types = dataSources[i].types;
          var type = types[Math.floor(Math.random() * types.length)];
          return exports.generateEquipmentOfType(type, level);
        }
      }

      new Error("Invalid item slot: " + slot);
    };

    exports.generateEquipmentOfType = function(type, level) {
      var hasPrefix = Math.random() < (Math.min(level, 25) / 50);
      var hasSuffix = Math.random() < (Math.min(level - 25, 25) / 50);
      var slot = null;
      var itemData = null;

      for (var i = 0; i < dataSources.length; i++) {
        if (dataSources[i].types.indexOf(type) !== -1) {
          itemData = dataSources[i][type];
          slot = dataSources[i].slot;
          break;
        }
      }

      if (itemData === null) {
        new Error('Invalid item type: ' + type);
      }

      var name = '';

      if (hasPrefix) {
        var prefixIndex = Math.floor(Math.random() * itemData.prefixes.length);
        name += itemData.prefixes[prefixIndex] + ' ';
      }

      var baseIndex = Math.floor(Math.random() * itemData.bases.length);
      name += itemData.bases[baseIndex];

      if (hasSuffix) {
        var suffixIndex = Math.floor(Math.random() * itemData.suffixes.length);
        name += ' ' + itemData.suffixes[suffixIndex];
      }

      return {
        type: type,
        slot: slot,
        name: name
      };
    };

    return exports;
  }]);
