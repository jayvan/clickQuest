'use strict';

// Each monster has the following..
// Size: 1 or higher. Time to fight is ~size * 30 seconds. 1 -> 30 sec, 5 -> 2.5 min
// Drops: Names of junk loot the mob can drop
// Actions: the things that the monster can do in battle

angular.module('clickQuestApp')
  .value('MonsterData',
  {
    'Rat': {
      name: 'Rat',
      size: 1,
      drops: ['Rat\'s Paw', 'Rat Tail', 'Vermin Guts'],
      actions: [
        'The rat gnaws you with its teeth',
        'The rat darts betwen your feet',
        'You step on the rat and it lets out a terrifying shriek',
      ]
    },
    'Slime': {
      name: 'Slime',
      size: 1,
      drops: ['Green Gel', 'Squishy Liquid', 'Slimey Bubble'],
      actions: [
        'The slime rolls toward you leaving a sticky mess on the floor',
        'The slime heabutts your foot leaving it glued to the floor',
        'You gag on the stench of the slime',
      ]
    }
  }
  );
