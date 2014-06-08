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
    "duration": 2,
    "reward": 10,
    "subTasks": [
      "Sage's Tasks",
      "The Artifact"
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
      "Giant Maggot",
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
  "Giant Maggot": {
    "name": "Giant Maggot",
    "description": "You spot a giant maggot in the shadows, yuck",
    "weight": 1,
    "duration": 30,
    "reward": 30,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Maggot",
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
    "playerTurn": false
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
      "Meeting Andrizzle",
      "Mike",
      "Jayvan"
    ],
    "type": "unorderedTask"
  },
  "Olaf": {
    "name": "Olaf",
    "description": "Learn about Olaf, the town blacksmith",
    "weight": 1,
    "duration": 4,
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
    "description": "It's time to meet Meishan, the town herbalist",
    "weight": 1,
    "duration": 4,
    "reward": 10,
    "subTasks": [
      "Meishan's Smile",
      "Herbal Remedies",
      "Meishan's Farm",
      "Meishan's Plant"
    ],
    "type": "unorderedTask"
  },
  "Meishan's Smile": {
    "name": "Meishan's Smile",
    "description": "Meishan bears a big grin, she's always happy - unless she's hungry that is",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Herbal Remedies": {
    "name": "Herbal Remedies",
    "description": "Meishan hands you a wad of green herbs and instructs you to eat it when you're feeling sad",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Meishan's Farm": {
    "name": "Meishan's Farm",
    "description": "Meishan gestures out the window at her farm, you see a variety of herbs and crops growing",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Meishan's Plant": {
    "name": "Meishan's Plant",
    "description": "You eat a fuzzy leaf which seems to cause you extreme flatulence",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Meeting Andrizzle": {
    "name": "Meeting Andrizzle",
    "description": "It's time to meet Andrizzle - the local drunk",
    "weight": 1,
    "duration": 4,
    "reward": 10,
    "subTasks": [
      "Andrizzle's Addiction",
      "Andrizzle's High Standards",
      "Andrizzle's Other Addiction",
      "Andrizzle's Thoughts"
    ],
    "type": "unorderedTask"
  },
  "Andrizzle's Addiction": {
    "name": "Andrizzle's Addiction",
    "description": "Andrizzle looks you in the eye and asks for another drink - his pockets are a little light",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Andrizzle's High Standards": {
    "name": "Andrizzle's High Standards",
    "description": "Andrizzle gestures at a women in the corner, and tells you how unflattering her appearance is",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Andrizzle's Other Addiction": {
    "name": "Andrizzle's Other Addiction",
    "description": "Andrizzle reaches to his belt and sips from a flask containing an energy potion, that can't mix well with his liquor",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Andrizzle's Thoughts": {
    "name": "Andrizzle's Thoughts",
    "description": "Andrizzle murmurs lyrics to various hymns under his breath",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Mike": {
    "name": "Mike",
    "description": "Time to meet Mike, the village Jeweler",
    "weight": 1,
    "duration": 4,
    "reward": 10,
    "subTasks": [
      "Mike's Bling",
      "Mike's Touch",
      "Mike's Magic",
      "Mike's Strength"
    ],
    "type": "unorderedTask"
  },
  "Mike's Bling": {
    "name": "Mike's Bling",
    "description": "You notice Mike has multiple rings on each of his fingers",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Mike's Touch": {
    "name": "Mike's Touch",
    "description": "Mike explains his business, he'd put a ring on almost every woman in town",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Mike's Magic": {
    "name": "Mike's Magic",
    "description": "\"Some call me Magic Mike\", he says, \"I sell all manner of magical rings and amulets\".",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Mike's Strength": {
    "name": "Mike's Strength",
    "description": "Considering he is a Jeweler, Mike has some pretty bulky muscles",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Jayvan": {
    "name": "Jayvan",
    "description": "Jayvan is the village brainiac",
    "weight": 1,
    "duration": 4,
    "reward": 10,
    "subTasks": [
      "Jayvan's Ambition",
      "Jayvan's Research",
      "Jayvan's Gaze",
      "Jayvan's Demeanor"
    ],
    "type": "unorderedTask"
  },
  "Jayvan's Ambition": {
    "name": "Jayvan's Ambition",
    "description": "\"I want to help the world with my research\" Jayvan explains",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Jayvan's Research": {
    "name": "Jayvan's Research",
    "description": "Jayvan is trying to find a way to extend the distance of town portals to connect distant villages",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Jayvan's Gaze": {
    "name": "Jayvan's Gaze",
    "description": "Despite looking in your direction, he seems to be distracted in thought, looking through you",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "Jayvan's Demeanor": {
    "name": "Jayvan's Demeanor",
    "description": "Despite being a zany scientist, Jayvan explains concepts and his research quite clearly",
    "weight": 1,
    "duration": 15,
    "reward": 10,
    "type": "task"
  },
  "The Artifact": {
    "name": "The Artifact",
    "description": "Having completed your tasks for the sage you decide to relax",
    "weight": 1,
    "duration": 2,
    "reward": 10,
    "subTasks": [
      "Exploring the Meadow",
      "Mysterious Cave"
    ],
    "type": "orderedTask"
  },
  "Exploring the Meadow": {
    "name": "Exploring the Meadow",
    "description": "You decide to relax in a meadow",
    "weight": 1,
    "duration": 5000,
    "reward": 10,
    "subTasks": [
      "Taking in the sun",
      "Foraging for Berries",
      "Napping",
      "Snakes",
      "Rabbit"
    ],
    "type": "randomTask"
  },
  "Taking in the sun": {
    "name": "Taking in the sun",
    "description": "The sun feels nice and warm on your skin, this is the life",
    "weight": 3,
    "duration": 12,
    "reward": 24,
    "type": "task"
  },
  "Foraging for Berries": {
    "name": "Foraging for Berries",
    "description": "You find some delicious berries and eat them",
    "weight": 3,
    "duration": 10,
    "reward": 10,
    "type": "task"
  },
  "Napping": {
    "name": "Napping",
    "description": "You close your eyes and have a short nap",
    "weight": 1,
    "duration": 8,
    "reward": 8,
    "type": "task"
  },
  "Snakes": {
    "name": "Snakes",
    "description": "You're getting tired of these darn snakes on this darn plain",
    "weight": 2,
    "duration": 10,
    "reward": 20,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Snake"
  },
  "Rabbit": {
    "name": "Rabbit",
    "description": "You feel bad, but experience is experience",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Rabbit"
  },
  "Mysterious Cave": {
    "name": "Mysterious Cave",
    "description": "While exploring the meadow you come across a mysterious cave",
    "weight": 1,
    "duration": 2,
    "reward": 10,
    "subTasks": [
      "Exploring the Cave",
      "The Mysterious Den"
    ],
    "type": "orderedTask"
  },
  "Exploring the Cave": {
    "name": "Exploring the Cave",
    "description": "You explore the cave",
    "weight": 1,
    "duration": 5700,
    "reward": 10,
    "subTasks": [
      "Drip Drop",
      "Clearing Rocks",
      "Slippery Moss",
      "Cave Bats",
      "Wolf Attack",
      "Wandering"
    ],
    "type": "randomTask"
  },
  "Drip Drop": {
    "name": "Drip Drop",
    "description": "The splash from a nearby stalactite scares you",
    "weight": 1,
    "duration": 6,
    "reward": 6,
    "type": "task"
  },
  "Clearing Rocks": {
    "name": "Clearing Rocks",
    "description": "You clear some rocks that block your way",
    "weight": 1,
    "duration": 12,
    "reward": 6,
    "type": "task"
  },
  "Slippery Moss": {
    "name": "Slippery Moss",
    "description": "You slip and fall on some moss",
    "weight": 1,
    "duration": 8,
    "reward": 4,
    "type": "task"
  },
  "Cave Bats": {
    "name": "Cave Bats",
    "description": "Like warriors of the night, the bats attack",
    "weight": 2,
    "duration": 10,
    "reward": 10,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Bat"
  },
  "Wolf Attack": {
    "name": "Wolf Attack",
    "description": "You've disturbed the wolf's den",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Wolf"
  },
  "Wandering": {
    "name": "Wandering",
    "description": "You wander the twisting cold tunnels of the cave system",
    "weight": 4,
    "duration": 10,
    "reward": 10,
    "type": "task"
  },
  "The Mysterious Den": {
    "name": "The Mysterious Den",
    "description": "You stumbled into the lair of a sleeping bear",
    "weight": 1,
    "duration": 4,
    "reward": 10,
    "subTasks": [
      "Down the rabbit hole",
      "Shiny Object",
      "Get Shiny",
      "The Sleepy Bear"
    ],
    "type": "orderedTask"
  },
  "Down the rabbit hole": {
    "name": "Down the rabbit hole",
    "description": "You suddenly fall through some loose rock into the lair of a sleeping bear",
    "weight": 1,
    "duration": 20,
    "reward": 10,
    "type": "task"
  },
  "Shiny Object": {
    "name": "Shiny Object",
    "description": "You notice an an ancient artifact in the corner with a strange symbol on it",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "type": "task"
  },
  "Get Shiny": {
    "name": "Get Shiny",
    "description": "You approach the artifact, as you grab it the sleeping bear awakens",
    "weight": 1,
    "duration": 8,
    "reward": 10,
    "type": "task"
  },
  "The Sleepy Bear": {
    "name": "The Sleepy Bear",
    "description": "This bear doesn't look ready for battle, but your presence is irritating him",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "subTasks": [],
    "type": "combatTask",
    "monster": "Sleepy Bear"
  }
}
);
