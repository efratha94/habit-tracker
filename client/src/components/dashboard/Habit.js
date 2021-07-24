import React from 'react'
import Card from './Card'
import "./Dashboard.css"
import Day from "./Day"
import axios from "axios";

const Habit = (props) => {

    const changeCompleted = (status, date) => {
        console.log(status, date)
    }

    return ( 
        <li>
            <Card className="habit">
                <div className="habit__description">
                    <h2 className="habit-header">{props.habitName.toUpperCase()}</h2>
                    {props.pastDays.map((d, i) => (
                        <Day day={d.date} completed={d.completed} key={i} onChangeCompleted={changeCompleted}/>
                    ))}
                </div>
            </Card>
        </li>
    )
}

export default Habit

