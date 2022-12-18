import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Typography from "@mui/material/Typography";

const TicketsDetailsModal = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="tickets-details-title"
                aria-describedby="tickets-details-content"
                maxWidth="md"
            >
                <DialogTitle id="tickets-details-title" className="flex items-center">
                    Information about purchased tickets
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="tickets-details-content">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                            <Typography className="col-span-4 text-black text-lg font-500 mb-5">
                                Customer
                            </Typography>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:user</FuseSvgIcon>
                                <span>Vasilije Čabarkapa</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:mail</FuseSvgIcon>
                                <span>vascabarkapa@gmail.com</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:phone</FuseSvgIcon>
                                <span>+38766795232</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                             color="action">heroicons-solid:location-marker</FuseSvgIcon>
                                <span>Gavrila Principa 91, Višegrad, Bosna i Hercegovina</span>
                            </div>
                            <Typography className="col-span-4 text-black text-lg font-500 mt-10 mb-5">
                                Transaction details
                            </Typography>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Movie name: </span>
                                <span>The Big Short</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Movie date: </span>
                                <span>01.01.1999 20:30h</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Method of payment: </span>
                                <span>Credit Card</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Card type: </span>
                                <span>Maestro</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Card number: </span>
                                <span>5874 5889 5555 1211</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <span className="text-black font-500">Expired date: </span>
                                <span>12/24</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <span className="text-black font-500">CCV number: </span>
                                <span>775</span>
                            </div>
                            <hr className="col-span-4"/>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Date and time of transaction: </span>
                                <span>01.01.1999. 15:57h</span>
                            </div>
                            <div className="col-span-4 sm:col-span-2 md:col-span-1">
                                <span className="text-black font-500">Number of tickets: </span>
                                <span>2</span>
                            </div>
                            <div className="col-span-4 sm:col-span-2 md:col-span-1">
                                <span className="text-black font-500">Price per ticket: </span>
                                <span>&euro;15.55</span>
                            </div>
                            <div className="col-span-4 sm:col-start-3 sm:col-end-3 md:col-start-4 md:col-end-4">
                                <span className="text-black font-500">Total price: </span>
                                <span>&euro;40.50</span>
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

export default TicketsDetailsModal;