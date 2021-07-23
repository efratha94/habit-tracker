const mongoose = require("mongoose")
const Schema = mongoose.Schema

const habitSchema = new Schema({
    name: { type: String, minlength: 2, required: true },
    pastDays: Array,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const Habit = mongoose.model("habit", habitSchema)

module.exports = Habit