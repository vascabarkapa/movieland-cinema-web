import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {showMessage} from "app/store/fuse/messageSlice";
import { useDispatch } from 'react-redux';

const ConfirmationDeleteModal = ({open, setOpen, message, id}) => {
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        setOpen(false);
        dispatch(showMessage({message: "Successfully deleted!"}));
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-delete-title"
                aria-describedby="alert-delete-description"
            >
                <DialogTitle id="alert-delete-title">
                    {"Delete confirmation"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-delete-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button color="error" onClick={handleClose}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ConfirmationDeleteModal;