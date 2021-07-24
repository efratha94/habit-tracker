import React from 'react'
import Card from './Card'
import "./Dashboard.css"

const Habit = (props) => {
    console.log("habit props", props)
    return (
        <li>
            <Card className="habit">
                {/* <ExpenseDate date={props.date}/> */}
                <div className="habit-item__description">
                    <h2>{props.habitName}</h2>
                </div>
            </Card>
        </li>
    )
}

export default Habit