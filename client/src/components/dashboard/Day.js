import React, { useState, useEffect,useCallback,  useRef } from 'react'
import "./Dashboard.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';


const Day = (props) => {
    const [completed, setCompleted] = useState(props.completed)
    const [open, setOpen] = useState(false);
    const myCallbackList = useRef([])
 
    let date = props.day.split("-")[0]

    const setCompletedWithCBs = (newState, callback) => {
        setCompleted(newState)
        if (callback) myCallbackList.current.push({func: callback, args: [newState, props.day]})
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
        setOpen(true);
    };

    const handleClose = async e => {
        if (e.target.textContent === "Yes" && !completed) setCompletedWithCBs(true, changeCompleted);
        if (e.target.textContent === "Yes" && completed) setCompletedWithCBs(false, changeCompleted);
        setOpen(false)
    };

    return (

        <span className={completed ? "outer-circle-completed" : "outer-circle-not-completed"}>
            <span className="inner-circle" onClick={handleClickOpen}>
                {/* dynamic background colour for completeion */}
                {date}
            </span>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {!completed ? 
                        "Do you wish to mark this habit as completed?" : 
                        "Do you wish to mark this habit as not completed?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="secondary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </span>
    )
}

export default Day
