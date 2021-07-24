import React from 'react'
import Card from './Card'
import "./Dashboard.css"
// import ProgressBar from "./ProgressBar"
import Day from "./Day"

const Habit = (props) => {
    console.log("habit props", props)
    return (
        <li>
            <Card className="habit">
                {/* <ExpenseDate date={props.date}/> */}
                <div className="habit__description">
                    <h2 className="habit-header">{props.habitName.toUpperCase()}</h2>
                    {props.pastDays.map((d, i) => (
                        <Day day={d.date} completed={d.completed} key={i} />
                    ))}
                </div>
            </Card>
        </li>
    )
}

export default Habit


                    {/* <ProgressBar habit={props.habitName} percentage={'20'}/> */}
                    {/* <div className="progress-bar">
                        <span className="progress-bar-done">
                        </span>
                    </div> */}

                    // {props.pastDays.map((day, ind) => {
                    //     
                    // })}