const Task = require('../models/Task');
const User = require('../models/User');

module.exports = {
    async index(req, res){
      const { userid } = req.headers;
      const user = await User.findOne({ _id: userid  }).populate('tasks');
      let tasks = user.tasks;
      let taskNotDone = [];
      tasks.forEach( task => {
        if(task.isDone == false){
          taskNotDone.push(task);
        }
      });
      res.status(200).send(taskNotDone);
    },
    async getHistory(req,res){
      const tasks = await Task.find();
      let tasksDone = [];
      tasks.forEach( task => {
        if(task.isDone){
          tasksDone.push(task);
        }
      });
      res.status(200).send(tasksDone);
    },
    async save(req, res){
      const { userid } = req.headers;
      const {name, description} = req.body;
      const task = await Task.create({
        name,
        description,
        idUser: userid,
      });
      await User.findOneAndUpdate( { _id: userid }, {$push: {tasks: task._id} });
      res.status(200).send(task);
    },
    async update(req, res){
      const { taskid } = req.params;
      const { name, description, isDone } = req.body;
      const { userid } = req.headers;
      const task = await Task.findOne( { _id: taskid  });
      if(task.idUser == userid ){
        let newTask = await Task.findOneAndUpdate( { _id: taskid}, {
          name,
          description,
          isDone,
        }, { new: true })
        res.status(200).send(newTask);
      }else{
        res.status(400).send("Deu merda");
      }
    },
    async delete(req, res){
      const { taskid } = req.params;
      const { userid } = req.headers;
      const task = await Task.findOne( { _id: taskid  });
      if(task.idUser == userid ){
        await User.findOneAndUpdate({_id: task._id}, {$pull: {tasks: task._id}});
        await Task.findOneAndRemove( { _id: taskid} );
        res.status(200),send('Tarefa Removida Ccom sucesso');
      }else{
        res.status(400).send('Ocorreu algum erro');
      }
    }
}