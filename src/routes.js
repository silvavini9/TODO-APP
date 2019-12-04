const express = require("express");
const router = express.Router();
const TaskController = require('./controllers/TaskController');

router.get('/', TaskController.index);
router.post('task/add',);
router.put('task/:Taskid/update',)
router.delete('task/:Taskid/update',)
