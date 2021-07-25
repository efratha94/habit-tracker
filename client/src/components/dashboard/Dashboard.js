import React, { useState, useEffect, useContext, useCallback, useRef } from 'react'
import axios from 'axios'
import Card from "./Card"
import Habits from "./Habits"
import NewHabit from './NewHabit'
import { UserContext } from '../../utils/UserContext'
import "./Dashboard.css"

const Dashboard = () => {
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { activeUser } = useContext(UserContext)


    const addHabitHandler = (habit) => {
        setIsLoading(true)
        setHabits((prevState) => {
            return [...prevState, habit]
        })
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        const getHabits = async () => {
            const listOfHabits = await axios.get(`http://localhost:3001/habits/${activeUser}`)
            setHabits(listOfHabits.data)
            setIsLoading(false)
        }
        getHabits()
        }, [setIsLoading])


    return (
        <Card className="habits">
            <NewHabit onAddHabit={addHabitHandler} />
            {isLoading ? null : <Habits habits={habits} />}
        </Card>
    )
}

export default Dashboard