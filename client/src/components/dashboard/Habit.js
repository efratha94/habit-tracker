import React from 'react'
import Card from './Card'

const Habit = (props) => {
    console.log("habit props", props)
    return (
        <li>
            <Card className="habit-item">
                {/* <ExpenseDate date={props.date}/> */}
                <div className="habit-item__description">
                    
                    {/* <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}$</div> */}
                </div>
            </Card>
        </li>
    )
}

export default Habit