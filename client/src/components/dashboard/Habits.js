import React from 'react'
import Habit from './Habit'
import "./Dashboard.css"

const Habits = (props) => {
    console.log("props", props)
    return (
        <ul className="habits-list">
            {props.habits.map((habit, ind) => (
                <Habit key={ind} habitName={habit.name} pastDays={habit.pastDays}/>
            ))}
        </ul>
    )
}

export default Habits