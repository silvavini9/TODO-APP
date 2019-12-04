const Task = require('../models/Task');
router.get('/', TaskController.index);
router.post('task/add',);
router.put('task/:Taskid/update',);
router.delete('task/:Taskid/update',);

module.exports = {
    async index(req, res){
      const tasks = await Task.find();
      res.status(200).send(tasks);
    },
    async save(req, res){
      const task = await Task.create(req.body);
      res.status(200).send(task);
    },
    async update(req, res){
      const { Taskid } = req.params;
      const { name, description } = req.body;
      const { UserId } = req.headers;
      const task = await Task.findOne( { _id: Taskid  });
      if(task.user )
      res.status(200).send(task);
    },
}