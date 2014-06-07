'use strict';

angular.module('clickQuestApp')
  .factory('ItemManager',['WeaponData', function (WeaponData) {
    var dataSources = [WeaponData];

    var exports = {};

    exports.generateEquipment = function(type, level) {
      var hasPrefix = Math.random() < (Math.min(level, 25) / 100);
      var hasSuffix = Math.random() < (Math.min(level - 25, 25) / 100);
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
        name += itemData.prefixes[prefixIndex];
      }

      var baseIndex = Math.floor(Math.random() * itemData.bases.length);
      name += ' ' + itemData.bases[baseIndex];

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
