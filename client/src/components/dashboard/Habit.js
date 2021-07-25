import React, { useState, useContext } from 'react'
import "./Dashboard.css"
import Card from './Card'
import Day from "./Day"
import DialogComp from './DialogComp'
import { UserContext } from '../../utils/UserContext'
import axios from "axios";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


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

