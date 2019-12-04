const {Model, Schema, Types} = require('mongoose');
const ObjectId = Types.ObjectId;

const TaskSchema = new Schema({
    name: String,
    description: String,
    idUser: ObjectId, ref:' User',
});

module.exports = Model( "Task", TaskSchema );