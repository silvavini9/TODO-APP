const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./routes');
const server = express();
const passport = require('passport');

require('./helpers/passport-middleware');

mongoose.connect('mongodb://localhost/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.use(express.json())
server.use(routes);
server.use(cors());
// server.use(require('express-session')({ secret: 'todo-app', resave: false, saveUninitialized: false }));

server.use(passport.initialize());
server.use(passport.session());

server.listen(3333);