import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ProfileDetailsModal = ({ open, setOpen }) => {
    const CURRENT_USER = JSON.parse(localStorage.getItem("current_user"));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-profile-title"
                aria-describedby="alert-profile-description"
            >
                <DialogTitle id="alert-profile-title">
                    Profile information
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-profile-description">
                    <div className="grid grid-cols-1 gap-10">
                            <div>
                                <span className="text-black font-500">First Name: </span>
                                <span>{CURRENT_USER?.first_name}</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Last Name: </span>
                                <span>{CURRENT_USER?.last_name}</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Username: </span>
                                <span>{CURRENT_USER?.username}</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Email: </span>
                                <span>{CURRENT_USER?.email}</span>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ProfileDetailsModal;