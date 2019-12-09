const {model, Schema, Types} = require('mongoose');
const ObjectId = Types.ObjectId;

const TaskSchema = new Schema({
    name: { type: String },
    description: { type: String },
    idUser: { type: ObjectId, ref:'User' },
    isDone: { type: Boolean, default: false },
});

module.exports = model("Task", TaskSchema );