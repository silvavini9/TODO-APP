const { Model, Schema } = require("mongoose");
const ObjectId = Types.ObjectId;

const UserSchema = new Schema({
    _id: ObjectId,
    name: String,
    email: String,
    cpf: Number,
});


module.exports = Model("User", UserSchema)