const User = require('../models/User')

module.exports = {
   async save(req, res){
    const { email } = req.body;
    let userExist = await User.findOne({email: email});
    if(userExist == null){
      const user = await User.create(req.body);
      res.status(200).send(user);
    } else{
      res.status(400).send("Usuário já existente");
    }
   },
   async edit(req, res){
    const { userId } = req.headers;
    const { name, password} = req.body;
    try{
      await User.findOneAndUpdate({ _id: userId },{
        name,
        password,
      }, { new: true });
      res.status(200).send(user);
    } catch(e){
      res.status(400).send(e);
    }
  }     
}