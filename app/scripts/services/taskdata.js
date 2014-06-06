'use strict';

angular.module('clickQuestApp')
.value('TaskData',

{
  "root": {
    "name": "root",
    "description": "This is the one container to rule them all. The player doesn't see it, but it's used to store the high level tutorial, acts, etc.",
    "weight": 1,
    "duration": 10,
    "reward": 10,
    "subTasks": [
      "Kill Hillock",
      "Kill Brutus",
      "Kill Merveil"
    ],
    "type": "orderedTask"
  },
  "Kill Hillock": {
    "name": "Kill Hillock",
    "description": "Make your way up the beach and slay Hillock",
    "weight": 1,
    "duration": 30,
    "reward": 10,
    "type": "task"
  },
  "Kill Brutus": {
    "name": "Kill Brutus",
    "description": "Make your way To the prison and slay Brutus",
    "weight": 1,
    "duration": 30,
    "reward": 10,
    "type": "task"
  },
  "Kill Merveil": {
    "name": "Kill Merveil",
    "description": "Make your way To the caverns and slay Merveil",
    "weight": 1,
    "duration": 30,
    "reward": 10,
    "type": "task"
  }
}
);
