const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, unique: true, minlength: 2, required: true },
    password: { type: String, required: true },
    habits: [{ type: Schema.Types.ObjectId, ref: 'habit' }]
})

const User = mongoose.model("user", userSchema)

module.exports = User