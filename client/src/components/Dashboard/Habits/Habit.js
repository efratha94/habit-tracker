import React, { useState, useContext } from 'react'
import "../Dashboard.css"
import Card from '../../../utils/Card'
import Day from "./Day"
import DialogComp from '../../../utils/DialogComp'
import { UserContext } from '../../../utils/UserContext'
import axios from "axios";
import Icon from '@material-ui/core/Icon'

const Habit = (props) => {
    const [error, setError] = useState('')
    const [open, setOpen] = useState(true);
    const [remove, setRemove] = useState(false)
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
            const envURL = process.env.NODE_ENV === "development" ? "http://localhost:3001/updatehabit" : "/updatehabit"
            console.log("envURL", envURL)
            await axios.post(envURL, habitData)

        } catch (err) {
            setError(err.response.data)
            setOpen(true);
        }
    }

    const onClickDelete = () => {
        setRemove(true)
        setOpen(true);
    }

    const handleDelete = e => {
        setOpen(false)
        if (e === "Yes") props.onDeleteHabit(activeUser, props.habitName);
    }

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <li>
            <Card className="habit">
                <div className="habit__description">
                    <h2 className="habit-header">{props.habitName.toUpperCase()}</h2>
                    {props.pastDays.map((d, i) => (
                        <Day day={d.date} colour={props.colour} completed={d.completed} key={i} onChangeCompleted={changeCompleted} error={error} />
                    ))}
                    <Icon className="trashcan" onClick={onClickDelete}>delete</Icon>
                </div>
                {remove &&
                    <DialogComp
                        isOpen={open}
                        onCloseHandle={handleDelete}
                        title="Are you sure you want to delete this habit? All its data will be lost"
                        content={null}
                        okButton={true}
                    />}
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

