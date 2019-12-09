const express = require("express");
const router = express.Router();
const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');
const {authenticationMiddleware} = require('./helpers/auth-middleware');
const passport = require('passport');

router.get('/tasks', TaskController.index);
router.get('/tasks/done', TaskController.getHistory);
router.post('/task/add', TaskController.save);
router.put('/task/:taskid/update', TaskController.update)
router.delete('/task/:taskid/delete', TaskController.delete)

router.post('/user/register', UserController.save);
router.post('/user/login', UserController.login);

module.exports = router