import React from 'react'
import Habit from './Habit'
import "../Dashboard.css"
import getRandColour from "../../../utils/randColours"

const Habits = (props) => {

    return (
        <ul className="habits-list">
            {props.habits.map((habit, ind) => (
                <Habit key={ind} colour={getRandColour()} habitName={habit.name} weekNumber={habit.weekNumber} pastDays={habit.pastDays}/>              
            ))}
        </ul>
    )
}

export default Habits