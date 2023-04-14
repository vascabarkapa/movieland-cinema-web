import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import TicketService from 'src/app/shared/services/ticket-service';
import DateTimeHelper from 'src/app/shared/helpers/DateTimeHelper';

const TicketsDetailsModal = ({ open, setOpen, id }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [ticket, setTicket] = useState({});

    useEffect(() => {
        if (id) {
            TicketService.getTicketById(id).then((response) => {
                if (response) {
                    setTicket(response?.data);
                    setIsLoaded(true);
                }
            })
        } else {
            setIsLoaded(true);
        }
    }, [])

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
                className={!isLoaded && "animate-pulse"}
            >
                <DialogTitle id="tickets-details-title" className="flex items-center">
                    Information about purchased tickets
                </DialogTitle>
                {isLoaded ? <><DialogContent>
                    <DialogContentText id="tickets-details-content">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                            <Typography className="col-span-4 text-black text-lg font-500 mb-5">
                                Customer
                            </Typography>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                    color="action">heroicons-solid:user</FuseSvgIcon>
                                <span>{ticket?.first_name + " " + ticket?.last_name}</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                    color="action">heroicons-solid:mail</FuseSvgIcon>
                                <span>{ticket?.email}</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                    color="action">heroicons-solid:phone</FuseSvgIcon>
                                <span>{ticket?.phone_number}</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <FuseSvgIcon className="inline" size={24}
                                    color="action">heroicons-solid:location-marker</FuseSvgIcon>
                                <span>{ticket?.address + ", " + ticket?.city + ", " + ticket?.country}</span>
                            </div>
                            <Typography className="col-span-4 text-black text-lg font-500 mt-10 mb-5">
                                Transaction details
                            </Typography>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Movie name: </span>
                                <span>{ticket?.repertory?.movie?.name}</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Movie date: </span>
                                <span>{DateTimeHelper.convertToLocalFormat(ticket?.repertory?.dateTime)}</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Method of payment: </span>
                                <span>Credit Card</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Card type: </span>
                                <span>{ticket?.card_type}</span>
                            </div>
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Card number: </span>
                                <span>{ticket?.card_number}</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <span className="text-black font-500">Expired date: </span>
                                <span>{ticket?.card_date_expiry}</span>
                            </div>
                            <div className="col-span-4 md:col-span-1">
                                <span className="text-black font-500">CCV number: </span>
                                <span>{ticket?.card_ccv}</span>
                            </div>
                            <hr className="col-span-4" />
                            <div className="col-span-4 md:col-span-2">
                                <span className="text-black font-500">Date and time of transaction: </span>
                                <span>{DateTimeHelper.convertToLocalFormatWithSeconds(ticket?.createdAt)}</span>
                            </div>
                            <div className="col-span-4 sm:col-span-2 md:col-span-1">
                                <span className="text-black font-500">Number of tickets: </span>
                                <span>{ticket?.number_of_tickets}</span>
                            </div>
                            <div className="col-span-4 sm:col-span-2 md:col-span-1">
                                <span className="text-black font-500">Price per ticket: </span>
                                <span>{ticket?.repertory?.price?.toFixed(2)}&euro;</span>
                            </div>
                            <div className="col-span-4 sm:col-start-3 sm:col-end-3 md:col-start-4 md:col-end-4">
                                <span className="text-black font-500">Total price: </span>
                                <span>{ticket?.sum_price?.toFixed(2)}&nbsp;&euro;</span>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions></> : <></>}
            </Dialog>
        </div>
    );
}

export default TicketsDetailsModal;