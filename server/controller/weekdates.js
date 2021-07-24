const moment = require("moment")

let curr = new Date 
let week = []
let weekNumber = moment(curr, "DD-MM-YYYY").week() - 1

for (let i = 0; i < 7; i++) {
  let first = curr.getDate() - curr.getDay() + i
  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  day = moment(day).format("DD-MM-YYYY")
  week.push(day)
}

module.exports = { week, weekNumber }
