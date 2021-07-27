import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import Card from "../../utils/Card"
import Habits from "./Habits/Habits"
import NewHabit from './NewHabits/NewHabit'
import { UserContext } from '../../utils/UserContext'
import "./Dashboard.css"


const Dashboard = () => {
    const [habits, setHabits] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { activeUser } = useContext(UserContext)


    const addHabitHandler = habit => {
        setIsLoading(true)
        setHabits((prevState) => {
            return [...prevState, habit]
        })
        setIsLoading(false)
    }

    const deleteHabitHandler = habit => {
        const habitToSplice = habits.findIndex(el => el.name === habit)
        const habitsDuplicate = [...habits]
        habitsDuplicate.splice(habitToSplice, 1)

        setIsLoading(true)
        setHabits(habitsDuplicate)
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        const getHabits = async () => {
            const envURL = process.env.NODE_ENV === "development" ? `http://localhost:3001/habits/${activeUser}` : `/habits/${activeUser}`
            const listOfHabits = await axios.get(envURL)
            setHabits(listOfHabits.data)
            setIsLoading(false)
        }
        getHabits()
        }, [setIsLoading])


    return (
        <Card className="habits">
            <NewHabit onAddHabit={addHabitHandler} />
            {isLoading ? null : <Habits habits={habits} onDeleteHabit={deleteHabitHandler}/>}
        </Card>
    )
}

export default Dashboard