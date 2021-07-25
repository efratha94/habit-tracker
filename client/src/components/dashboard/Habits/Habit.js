import React, { useState, useContext } from 'react'
import "../Dashboard.css"
import Card from '../../../utils/Card'
import Day from "./Day"
import DialogComp from '../../../utils/DialogComp'
import { UserContext } from '../../../utils/UserContext'
import axios from "axios";


const Habit = (props) => {
    const [error, setError] = useState('')
    const [open, setOpen] = useState(true);
    const { activeUser } = useContext(UserContext)

    const changeCompleted = async (status, date) => {
        try {
            let habitData = {
                user: activeUser,
                habitName: props.habitName,
                weekNumber: props.weekNumber,
                date: date,
                completed: status
            }

            await axios.post("http://localhost:3001/updatehabit", habitData)

        } catch (err) {
            setError(err.response.data)
            setOpen(true);
        }
    }

    const handleClose = async e => {
        setOpen(false)
    };

    return (
        <li>
            <Card className="habit">
                <div className="habit__description">
                    <h2 className="habit-header">{props.habitName.toUpperCase()}</h2>
                    {props.pastDays.map((d, i) => (
                        <Day day={d.date} colour={props.colour} completed={d.completed} key={i} onChangeCompleted={changeCompleted} error={error}/>
                    ))}
                </div>
                {/* <div>Delete Habit</div> */}
            </Card>

            {error &&
                <DialogComp 
                    isOpen={open} 
                    onCloseHandle={handleClose}
                    title="Could not update habit!"
                    content={`Error recieved: ${error}. Please try again later`} 
                    okButton={false}
                />
            }
        </li>
    )
}

export default Habit

