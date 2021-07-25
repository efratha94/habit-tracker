import React from 'react'
import Habit from './Habit'
import "./Dashboard.css"

const Habits = (props) => {
    console.log("props.habits", props.habits)
    return (
        <ul className="habits-list">
            {props.habits.map((habit, ind) => (
                <Habit key={ind} habitName={habit.name} weekNumber={habit.weekNumber} pastDays={habit.pastDays}/>
            ))}
        </ul>
    )
}

export default Habits