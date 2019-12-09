const { model, Schema, Types } = require("mongoose");
const ObjectId = Types.ObjectId;

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    tasks: [{ type: ObjectId, ref: 'Task' }],
});


module.exports = model("User", UserSchema)