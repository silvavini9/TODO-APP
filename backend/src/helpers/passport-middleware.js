const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new Strategy(
  async function(username, password, cb) {
    try{
      let user = await User.findOne({username: username});
      if (!user) {
        return cb(null, false, {message: 'Usuário ou senha incorretos'});
      }
      if (password != user.password) {
        return cb(null, false, {message: 'Usuário ou senha incorretos'});
      }
      return cb(null, admin);

    } catch(e){
      if (err) {
        return cb(err);
      }
    } 
}));

passport.serializeUser(function(user, cb) {
  cb(null, user._id);
});
  
passport.deserializeUser( async function(id, cb) {
  try{
    let user = await User.findById(id);
    if(!user){
      return;
    }
    if(user){
      return cb(null, user);
    }
  } catch(err){
    if (err) {
      return cb(err);
    }
  }
});