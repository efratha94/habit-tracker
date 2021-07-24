const express = require('express');
const router = express.Router();
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

    try {
        console.log(req.body)
        let findUser = await User.findOne({ username: req.body.activeUser }).populate('habits').exec()

        let habitMatch = findUser.habits.find(habit => {
            return habit.name === req.body.habit
        })

        if (!habitMatch) {
            let newHabit = new Habit({ name: req.body.habit, user: findUser._id })
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
            return {
                name: habit.name,
                pastDays: habit.pastDays
            }
        })
        
        res.status(200).send(userHabits)

    } catch (err) {
        //should refine it
        res.status(400).send(err.message)
    }

})

module.exports = router;