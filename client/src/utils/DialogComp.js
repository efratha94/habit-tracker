import "../components/Dashboard/Dashboard.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const DialogComp = (props) => {

    const handleClose = e => {
        props.onCloseHandle(e.target.textContent)
    }


    return (
        <Dialog open={props.isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.content}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Dismiss
                </Button>
                {!props.okButton ? null : <Button onClick={handleClose} color="secondary" autoFocus>Yes</Button>}
            </DialogActions>
        </Dialog>
    )
}

export default DialogComp