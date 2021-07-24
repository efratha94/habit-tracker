import React from 'react'
import Card from './Card'
import "./Dashboard.css"
import ProgressBar from "./ProgressBar"

const Habit = (props) => {
    console.log("habit props", props)
    return (
        <li>
            <Card className="habit">
                {/* <ExpenseDate date={props.date}/> */}
                <div className="habit__description">
                    <ProgressBar habit={props.habitName} percentage={'20'}/>
                    {/* <div className="progress-bar">
                        <h2>{props.habitName.toUpperCase()}</h2>
                        <span className="progress-bar-done">
                        </span>
                    </div> */}
                </div>
            </Card>
        </li>
    )
}

export default Habit