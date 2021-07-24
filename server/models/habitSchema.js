const mongoose = require("mongoose")
const Schema = mongoose.Schema

const habitSchema = new Schema({
    name: { type: String, minlength: 2, required: true },
    pastDays: [{
        weekNumber: { type: Number },
        weekDates: [{
            date: { type: String },
            completed: { type: Boolean }
        }]
    }],
    user: { type: Schema.Types.ObjectId, ref: 'user' }
})

const Habit = mongoose.model("habit", habitSchema)

module.exports = Habit