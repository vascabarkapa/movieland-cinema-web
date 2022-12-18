import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";

const UsersDetailsModal = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="users-details-title"
                aria-describedby="users-details-content"
            >
                <DialogTitle id="users-details-title" className="flex items-center">
                    <span>First and Last Name</span><FuseSvgIcon className="inline" size={24}
                                                    color="action">material-twotone:male</FuseSvgIcon>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="users-details-content">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div>
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:user</FuseSvgIcon>
                                <span>username</span>
                            </div>
                            <div>
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:mail</FuseSvgIcon>
                                <span>email</span>
                            </div>
                            <div>
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:menu-alt-1</FuseSvgIcon>
                                <span>citizen number</span>
                            </div>
                            <div>
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:phone</FuseSvgIcon>
                                <span>phone number</span>
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:location-marker</FuseSvgIcon>
                                <span>street, number, city, country</span>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default UsersDetailsModal;