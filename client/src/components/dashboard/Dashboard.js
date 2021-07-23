import React, { useState } from 'react'
import Card from "./Card"
import Habits from "./Habits"
import NewHabit from './NewHabit'

const Dashboard = ({match}) => {
    const [habit, setHabits] = useState([])

    const addHabitHandler = (habit) => {
        setHabits((prevHabits) => {
            return [habit, ...prevHabits]
        })
    }

    return (
        <Card className="habits">
            <NewHabit onAddHabit={addHabitHandler}/>
            <Habits />
        </Card>
    )
}

export default Dashboard