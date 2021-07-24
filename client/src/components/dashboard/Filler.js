import React from 'react'
import "./Dashboard.css"

const Filler = (props) => {

    return (
        <div className="filler" style={{width: `${props.percentage}%`}}>
            {props.children}
        </div>
    )
}

export default Filler