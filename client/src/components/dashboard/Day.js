import React from 'react'
import "./Dashboard.css"

const Day = (props) => {
    let date = props.day.split("-")[0]
    return (
        <span className={props.completed ? "completed" : "not-completed"}>
            {date}
        </span>
    )
}

export default Day