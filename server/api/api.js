const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const { week, weekNumber } = require("../controller/weekdates")
const User = require("../models/userSchema")
const Habit = require("../models/habitSchema")

router.post("/registerUser", async (req, res) => {

    try {

        let newUser = new User({ username: req.body.username, password: req.body.password })
        await newUser.save()
        res.status(200).send("Saved")


    } catch (err) {
        //Should refine it

        res.status(400).send(err.message)
    }
})


router.post("/signInUser", async (req, res) => {

    try {
        let doesUserExist = await User.findOne({ username: req.body.username, password: req.body.password })
        if (doesUserExist === null) {
            throw new Error("User doesn't exist")
        } else {
            res.status(200).send("OK")
        }
    } catch (err) {
        //should refine it
        res.status(400).send(err.message)
    }
})


router.post("/newhabit", async (req, res) => {
    // console.log("week, weekNumber", week, weekNumber)
    console.log(req.body)
    try {
        let findUser = await User.findOne({ username: req.body.activeUser }).populate('habits').exec()
        let habitMatch = findUser.habits.find(habit => {
            return habit.name === req.body.habit
        })
        
        if (!habitMatch) {

            let weekDatesObj = week.map(date => {
                return { date, completed: false }
            })

            let pastWeekObj = {
                weekNumber,
                "weekDates": weekDatesObj
            }


            let newHabit = new Habit({ name: req.body.habit, user: findUser._id, pastDays: pastWeekObj })
            findUser.habits.push(newHabit)
            findUser.save()
            newHabit.save()
            res.status(200).send(`Saved new habit: ${req.body.habit}`)

        } else {
            throw new Error("Habit already exists for that user")
        }

    } catch (err) {
        //should refine it
        res.status(400).send(err.message)
    }
})

router.get("/habits/:username", async (req, res) => {
    try {
       
        const username = req.params.username
        const findUser = await User.findOne({ username }).populate('habits').exec()
        let userHabits  = findUser.habits.map(habit => {
            
            let item = {
                name: habit.name,
                weekNumber: habit.pastDays[0].weekNumber,
                pastDays: habit.pastDays[0].weekDates.map(elem => {
                    return { date: elem.date, completed: elem.completed }
                })
            }
            return item
        })
        res.status(200).send(userHabits)
    } catch (err) {
        // should refine it
        res.status(400).send(err.message)
    }

})

router.post("/updatehabit", async (req, res) => {
    // console.log(req.body)

    try {
        const findUser = await User.findOne({ username: req.body.user })
        const userID =  "60fbe9c3cf57b748d0a2b278" //findUser._id
        
        const findHabit = await Habit.findOne({ user: ObjectId(userID) })
        // console.log("findHabit", findHabit)
        const currWeek = findHabit.pastDays.filter(week => week.weekNumber === req.body.weekNumber)[0].weekDates
        const currDay = currWeek.filter(day => day.date === req.body.date)[0]
        currDay.completed = req.body.completed
        findHabit.save()
        res.status(200).send("OK")

    } catch (err) {
        // should refine it
        res.status(400).send(err.message)
    }
})
module.exports = router;