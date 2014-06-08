'use strict';

angular.module('clickQuestApp')
.value('TaskData',

{
  "root": {
    "name": "root",
    "description": "The base quest that is never shown the player. Holds everything",
    "weight": 1,
    "duration": 2,
    "reward": 10,
    "subTasks": [
      "Prologue: The Dream",
      "Act 1: Baptism"
    ],
    "type": "orderedTask"
  },
  "Prologue: The Dream": {
    "name": "Prologue: The Dream",
    "description": "You are experiencing a troubling dream!",
    "weight": 1,
    "duration": 12,
    "reward": 10,
    "subTasks": [
      "Vivid Meadows",
      "Swimming at Sea",
      "Above the Clouds",
      "Jogging",
      "Nightmare Begins",
      "Nightmare",
      "Awakening",
      "Remembering",
      "The Calling",
      "The Wise Sage",
      "Birthday",
      "Prove Your Worth"
    ],
    "type": "orderedTask"
  },
  "Vivid Meadows": {
    "name": "Vivid Meadows",
    "description": "You lie in a meadow breathing in the morning dew",
    "weight": 1,
    "duration": 7,
    "reward": 10,
    "type": "task"
  },
  "Swimming at Sea": {
    "name": "Swimming at Sea",
    "description": "You are thousands of leagues under the sea swimming with the fish",
    "weight": 1,
    "duration": 12,
    "reward": 10,
    "type": "task"
  },
  "Above the Clouds": {
    "name": "Above the Clouds",
    "description": "You are flying above the clouds, realizing the tops of clouds look just like the bottoms",
    "weight": 1,
    "duration": 9,
    "reward": 10,
    "type": "task"
  },
  "Jogging": {
    "name": "Jogging",
    "description": "You jog up the front walk and enter your house",
    "weight": 1,
    "duration": 11,
    "reward": 10,
    "type": "task"
  },
  "Nightmare Begins": {
    "name": "Nightmare Begins",
    "description": "Entering the door, you see your brother in tears",
    "weight": 1,
    "duration": 8,
    "reward": 10,
    "type": "task"
  },
  "Nightmare": {
    "name": "Nightmare",
    "description": "Your brother informs you of your parents' death",
    "weight": 1,
    "duration": 11,
    "reward": 10,
    "type": "task"
  },
  "Awakening": {
    "name": "Awakening",
    "description": "You jolt awake and rub your eyes",
    "weight": 1,
    "duration": 3,
    "reward": 10,
    "type": "task"
  },
  "Remembering": {
    "name": "Remembering",
    "description": "You recall that your brother left home many years ago",
    "weight": 1,
    "duration": 14,
    "reward": 10,
    "type": "task"
  },
  "The Calling": {
    "name": "The Calling",
    "description": "Your foster mother is calling you to breakfast, you are late again",
    "weight": 1,
    "duration": 13,
    "reward": 10,
    "type": "task"
  },
  "The Wise Sage": {
    "name": "The Wise Sage",
    "description": "A wise sage sits across from you at the kitchen table, a knowing look in his eye",
    "weight": 1,
    "duration": 7,
    "reward": 10,
    "type": "task"
  },
  "Birthday": {
    "name": "Birthday",
    "description": "It's your 16th birthday, time to prove you are responsible",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "type": "task"
  },
  "Prove Your Worth": {
    "name": "Prove Your Worth",
    "description": "The wise sage has assembled a series of challenges for you to complete",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "type": "task"
  },
  "Act 1: Baptism": {
    "name": "Act 1: Baptism",
    "description": "You've become of age! Time to prove yourself.",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "subTasks": [
      "Sage's Tasks"
    ],
    "type": "orderedTask"
  },
  "Sage's Tasks": {
    "name": "Sage's Tasks",
    "description": "Complete the Sage's 3 tasks to prove yourself",
    "weight": 1,
    "duration": 3,
    "reward": 10,
    "subTasks": [
      "Slay Town Pests",
      "Deliver Letters",
      "Meet the Townsfolk"
    ],
    "type": "unorderedTask"
  },
  "Slay Town Pests": {
    "name": "Slay Town Pests",
    "description": "A variety of pests are bothering the townsfolk, slay them to prove your might.",
    "weight": 1,
    "duration": 600,
    "reward": 10,
    "subTasks": [
      "Fetid Rat",
      "Green Slime"
    ],
    "type": "randomTask"
  },
  "Fetid Rat": {
    "name": "Fetid Rat",
    "description": "A disgusting rat slithers towards you. To arms!",
    "weight": 1,
    "duration": 30,
    "reward": 30,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Rat",
    "playerTurn": true
  },
  "Green Slime": {
    "name": "Green Slime",
    "description": "A nasty ass slime wriggles it's way over. To arms!",
    "weight": 1,
    "duration": 30,
    "reward": 30,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Slime",
    "playerTurn": true
  },
  "Deliver Letters": {
    "name": "Deliver Letters",
    "description": "The mailman is on vaction, help the townsfolk by delivering some letters",
    "weight": 1,
    "duration": 575,
    "reward": 10,
    "subTasks": [
      "Heavy Package",
      "Tiny Envelope",
      "Small Package",
      "Undeliverable"
    ],
    "type": "randomTask"
  },
  "Heavy Package": {
    "name": "Heavy Package",
    "description": "You haul a heavy package across town",
    "weight": 3,
    "duration": 20,
    "reward": 20,
    "type": "task"
  },
  "Tiny Envelope": {
    "name": "Tiny Envelope",
    "description": "You sprint across town with a little envelope",
    "weight": 4,
    "duration": 5,
    "reward": 5,
    "type": "task"
  },
  "Small Package": {
    "name": "Small Package",
    "description": "You walk with a small package, carefully trying not to break it",
    "weight": 5,
    "duration": 10,
    "reward": 10,
    "type": "task"
  },
  "Undeliverable": {
    "name": "Undeliverable",
    "description": "You struggle to decipher the hastily scrawled address on a letter",
    "weight": 1,
    "duration": 8,
    "reward": 4,
    "type": "task"
  },
  "Meet the Townsfolk": {
    "name": "Meet the Townsfolk",
    "description": "It's time you met the townsfolk",
    "weight": 1,
    "duration": 6,
    "reward": 10,
    "subTasks": [
      "Olaf",
      "Wendy",
      "Meishan",
      "Andrizzle",
      "Wilson",
      "Funkle"
    ],
    "type": "unorderedTask"
  },
  "Olaf": {
    "name": "Olaf",
    "description": "Learn about Olaf, the town blacksmith",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "subTasks": [
      "Can't Stand the Heat",
      "Olaf's Lineage",
      "Olaf's Family",
      "Olaf's Perfection"
    ],
    "type": "unorderedTask"
  },
  "Can't Stand the Heat": {
    "name": "Can't Stand the Heat",
    "description": "Olaf's forge has a roaring fire, you wipe a bead of sweat from your forehead",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Olaf's Lineage": {
    "name": "Olaf's Lineage",
    "description": "Olaf explains that he is the third blacksmith in his family following his father and grandfather",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Olaf's Family": {
    "name": "Olaf's Family",
    "description": "Olaf is married to his forge, he doesn't seem to have time for distractions",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Olaf's Perfection": {
    "name": "Olaf's Perfection",
    "description": "Olaf says it is important that every blade is as sharp as the last one",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Wendy": {
    "name": "Wendy",
    "description": "Wendy is the town grocer, you say hello and grab some rations",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Meishan": {
    "name": "Meishan",
    "description": "Meishan the town pharmacist always has a smile on her face",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Andrizzle": {
    "name": "Andrizzle",
    "description": "Andrizzle doesn\t have a home, but he has a big heart",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Wilson": {
    "name": "Wilson",
    "description": "Wilson always had a way with jewellery, he'd put a ring on almost every woman in town",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Funkle": {
    "name": "Funkle",
    "description": "Funkle's name has to change, it's bad",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  }
}
);
