const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require('./routes');
const server = express();
const helmet = require('helmet');
const passport = require('passport');

require('./helpers/passport-middleware');

mongoose.connect( 'mongodb+srv://todo-server:vinicius123@todo-app-fgxbr.mongodb.net/test?retryWrites=true&w=majorityX' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, () => console.log('Database Connect') );

server.use(express.json())
server.use(routes);
server.use(cors());
server.use(helmet());

server.use(require('express-session')({ secret: 'todo-app', resave: false, saveUninitialized: false }));
server.use(passport.initialize());
server.use(passport.session());

server.listen(3333);