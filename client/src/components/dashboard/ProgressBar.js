import React from 'react'
import Filler from "./Filler"
import "./Dashboard.css"

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            {/* {props.habit} */}
            <Filler habit={props.habit} percentage={props.percentage}>
                <h2>{props.habit.toUpperCase()}</h2>
            </Filler>
        </div>
    )
}

export default ProgressBar