import axios from 'axios'
import React, { useState, useContext } from 'react'
import { UserContext } from '../../utils/UserContext'

const NewHabitForm = (props) => {
    const [habit, setHabit] = useState('')
    const [error, setError] = useState('')
    const { activeUser } = useContext(UserContext)

    const newHabitHandler = e => {
        setHabit(e.target.value)
    }


    const submitHandler = async e => {
        try {
            e.preventDefault()
            
            await axios.post('http://localhost:3001/newhabit', { habit, activeUser })
            props.onSaveNewHabit(habit)
            setHabit('')
        } catch (err) {
            setError(err.response.data)
            setHabit('')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-habit__controls">
                <div className="new-habit__control">
                    <label>New Habit: </label>
                    <input type="text" value={habit} onChange={newHabitHandler} />
                </div>
            </div>
            <div className="new-habit__actions">
                <button name="cancel-changes" type="button" onClick={props.onCancel}>Cancel</button>
                <button name="add-habit" type="submit">Add Habit!</button>
            </div>
            {error ? <div>{error}</div> : null} {/* should be refined */}
        </form>
    )
}

export default NewHabitForm