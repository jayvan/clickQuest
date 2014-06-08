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
        'You step on the rat and it lets out a terrifying shriek'
      ]
    },
    'Slime': {
      name: 'Slime',
      size: 1,
      drops: ['Green Gel', 'Squishy Liquid', 'Slimy Bubble'],
      actions: [
        'The slime rolls toward you leaving a sticky mess on the floor',
        'The slime headbutts your foot leaving it glued to the floor',
        'You gag on the stench of the slime'
      ]
    },
    'Maggot': {
      name: 'Maggot',
      size: 1,
      drops: ['Maggot Juice', 'Maggot Husk', 'Maggot Brains'],
      actions: [
        'The maggot writhes menacingly',
        'The mere sight of the maggot disturbs your stomach',
        'The maggot slowly approaches you'
      ]
    },
    'Rabbit': {
      name: 'Rabbit',
      size: 2,
      drops: ['Lucky Rabbit Paw', 'Rabbit Skin', 'Rabbit\'s Carrot'],
      actions: [
        'The rabbit looks at your trying to understand your violence',
        'The rabbit hops around adorably',
        'The rabbit wiggles its ears'
      ]
    },
    'Snake': {
      name: 'Snake',
      size: 2,
      drops: ['Snake Venom', 'Snake Skin', 'Snake Oil'],
      actions: [
        'The snake hisses at you',
        'The snake tries to constrict itself around your throat',
        'The snake launches forward, sinking its fangs into you'
      ]
    },
    'Bat': {
      name: 'Bat',
      size: 1,
      drops: ['Bat Fang', 'Bat Wing', 'Bat Guano'],
      actions: [
        'The bat swoops at your from the dark',
        'The bat lets out a loud screech to locate you',
        'The bat flies overhead bombarding you with guano'
      ]
    },
    'Wolf': {
      name: 'Wolf',
      size: 3,
      drops: ['Wolf Pelt', 'Wolf Fang', 'Wolf Tongue'],
      actions: [
        'The wolf runs behind you and bites your calf',
        'The wolf howls for backup',
        'The wolf backs up to strike again'
      ]
    },
    'Sleepy Bear': {
      name: 'Sleepy Bear',
      size: 10,
      drops: ['Sleepy Bear\'s Fish'],
      actions: [
        'The sleepy bear crawls toward you but topples over in his state',
        'The sleepy bear lets loose a magnificent yawn',
        'The sleepy bear falls asleep momentarily',
        'The bear almost bites you, but determines it is too much effort',
        'The sleepy bear closes its eyes, hoping you dissapear'
      ]
    }
  }
  );
