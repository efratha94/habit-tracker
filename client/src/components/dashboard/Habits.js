import React from 'react'
import Habit from './Habit'

const Habits = (props) => {
    console.log(props)
    return (
        <ul className="habits-list">
            {/* {props.habits.map(habit => (
                <Habit key={habit.id} />
            ))} */}
        </ul>
    )
}

export default Habits