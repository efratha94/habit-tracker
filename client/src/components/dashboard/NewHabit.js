import React, { useState } from 'react'
import NewHabitForm from './NewHabitForm'

const NewHabit = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveNewHabitHandler = (enteredHabit) => {
        console.log("enteredHabit", enteredHabit)
        const habitData = {
            // id: Math.random().toString(),
            ...enteredHabit
        }
        props.onAddHabit(habitData)
        setIsEditing(false)
    }

    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }


    return (
        <div className="new-habit">
            {!isEditing && <button onClick={startEditingHandler}>Add New Habit</button>}
            {isEditing && <NewHabitForm onSaveNewHabit={saveNewHabitHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}

export default NewHabit