const User = require('../models/User')

module.exports = {
   async save(req, res){
    const { email } = req.body;
    let userExist = await User.findOne({email: email});
    console.log(userExist);
    if(userExist == null){
      const user = await User.create(req.body);
      res.status(200).send(user);
    } else{
      res.status(400).send("Usuário já existente");
    }
   },
   async login(req, res){
   }
}