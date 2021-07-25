import React, { useState, useEffect, useRef } from 'react'
import DialogComp from '../../../utils/DialogComp'
import "../Dashboard.css";


const Day = (props) => {
    const [completed, setCompleted] = useState(props.completed);
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false)
    const myCallbackList = useRef([])

    let date = props.day.split("-")[0]
    const newDate = new Date()
    const currDate = newDate.getDate()


    const setCompletedWithCBs = (newState, callback) => {
        setCompleted(newState)
        if (callback) myCallbackList.current.push({ func: callback, args: [newState, props.day] })
    }

    useEffect(() => {
        myCallbackList.current.forEach(callback => {
            callback.func(...callback.args)
        })
        myCallbackList.current = []
    }, [completed])

    const changeCompleted = (completed, date) => {
        props.onChangeCompleted(completed, date)
    }

    const handleClickOpen = () => {
        if (parseInt(date) === currDate) {
            setOpen(true);
        } else {
            setOpen(true);
            setError(true)
        }
    };

    const handleClose = content => {
        if (content === "Yes" && !completed) setCompletedWithCBs(true, changeCompleted);
        if (content === "Yes" && completed) setCompletedWithCBs(false, changeCompleted);
        setOpen(false)
    };

    return (

        <span className={completed ? "outer-circle-completed" : "outer-circle-not-completed"} style={completed ? { backgroundColor: props.colour } : null}>
            <span className="inner-circle" onClick={handleClickOpen}>
                {date}
            </span>
            <DialogComp
                isOpen={open}
                onCloseHandle={handleClose}
                title={!completed ?
                    "Do you wish to mark this habit as completed?" :
                    "Do you wish to mark this habit as not completed?"}
                content={null}
                okButton={true}
            />
            {error &&
                <DialogComp
                    isOpen={open}
                    onCloseHandle={handleClose}
                    title="Are you Doctor Who? Otherwise, you cannot update a future date"
                    content={null}
                    okButton={false}
                />}
        </span>
    )
}

export default Day

