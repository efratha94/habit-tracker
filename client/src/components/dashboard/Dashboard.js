import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Card from "./Card"
import Habits from "./Habits"
import NewHabit from './NewHabit'
import { UserContext } from '../../utils/UserContext'
import "./Dashboard.css"

const Dashboard = () => {
    const [habits, setHabits] = useState([])
    const { activeUser } = useContext(UserContext)

    const addHabitHandler = (habit) => {
        setHabits((prevHabits) => {
            return [habit, ...prevHabits]
        })
    }

    useEffect(() => {
        const getHabits = async () => {
            const listOfHabits = await axios.get(`http://localhost:3001/habits/${activeUser}`)
            setHabits(listOfHabits.data)
        }

        getHabits()
    },
        [setHabits])

    return (
        <Card className="habits">
            <NewHabit onAddHabit={addHabitHandler}/>
            <Habits habits={habits} />
        </Card>
    )
}

export default Dashboard