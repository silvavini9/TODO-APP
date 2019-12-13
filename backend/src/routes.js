const express = require("express");
const router = express.Router();
const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');
const {authenticationMiddleware} = require('./helpers/auth-middleware');

const passport = require('passport');

router.get('/tasks',authenticationMiddleware(), TaskController.index);
router.get('/tasks/done',authenticationMiddleware() , TaskController.getHistory);
router.post('/task/add', authenticationMiddleware() , TaskController.save);
router.put('/task/:taskid/update', authenticationMiddleware(), TaskController.update)
router.delete('/task/:taskid/delete', authenticationMiddleware(), TaskController.delete)


router.post('/login', passport.authenticate('local',{session: false}, { failureRedirect: '/login', successRedirect:'/tasks' }), LoginController.login);
router.post('/user/register', UserController.save);
router.post('/user/edit', authenticationMiddleware(), UserController.edit);


module.exports = router