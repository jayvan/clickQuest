'use strict';

angular.module('clickQuestApp')
.value('TaskData',

{
  "root": {
    "name": "Explore the Labrynth",
    "description": "This is the one container to rule them all. The player doesn't see it, but it's used to store the high level tutorial, acts, etc.",
    "weight": 1,
    "duration": 60,
    "reward": 10,
    "subTasks": [
      "Secret Passage",
      "Fell in a Trap",
      "Wandering Aimlessly"
    ],
    "type": "randomTask"
  },
  "Secret Passage": {
    "name": "Secret Passage",
    "description": "",
    "weight": 1,
    "duration": 5,
    "reward": 10,
    "type": "task"
  },
  "Fell in a Trap": {
    "name": "Fell in a Trap",
    "description": "Make your way To the prison and slay Brutus",
    "weight": 1,
    "duration": 30,
    "reward": 5,
    "subTasks": [
      "Lookin ARound",
      "Climbing the ladder out",
      "Dusting off"
    ],
    "type": "orderedTask"
  },
  "Lookin ARound": {
    "name": "Lookin ARound",
    "weight": 1,
    "duration": 3,
    "reward": 10,
    "type": "task"
  },
  "Climbing the ladder out": {
    "name": "Climbing the ladder out",
    "weight": 1,
    "duration": 3,
    "reward": 10,
    "type": "task"
  },
  "Dusting off": {
    "name": "Dusting off",
    "weight": 1,
    "duration": 3,
    "reward": 10,
    "type": "task"
  },
  "Wandering Aimlessly": {
    "name": "Wandering Aimlessly",
    "description": "Make your way To the caverns and slay Merveil",
    "weight": 3,
    "duration": 3,
    "reward": 3,
    "type": "task"
  }
}

);
