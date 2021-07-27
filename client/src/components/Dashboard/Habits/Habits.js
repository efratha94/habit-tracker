import React from 'react'
import Habit from './Habit'
import "../Dashboard.css"
import getRandColour from "../../../utils/randColours"
import axios from "axios";

const Habits = (props) => {

    const deleteHabit = async (user, habit) => {
        try {
            const envURL =  process.env.NODE_ENV === "development" ? `http://localhost:3001/deleteHabit/${user}/${habit}` : `/deleteHabit/${user}/${habit}`
            await axios.delete(envURL)
            props.onDeleteHabit(habit)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ul className="habits-list">
            {props.habits.map((habit, ind) => (
                <Habit key={ind} colour={getRandColour()} habitName={habit.name} weekNumber={habit.weekNumber} pastDays={habit.pastDays} onDeleteHabit={deleteHabit}/>              
            ))}
        </ul>
    )
}

export default Habits