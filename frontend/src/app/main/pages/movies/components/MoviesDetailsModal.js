import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MoviesDetailsModal = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="movies-details-title"
                aria-describedby="movies-details-content"
            >
                <DialogTitle id="movies-details-title" className="flex items-center">
                    <span>Movie Name</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="movies-details-content">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                            <div>
                                <span className="text-black font-500">Genre: </span>
                                <span>Action, Thriller</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Duration: </span>
                                <span>1.30h</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Duration: </span>
                                <span>7.2/10</span>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <span className="text-black font-500">Direction: </span>
                                <span>Vasilije Ninković</span>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <span className="text-black font-500">Actors: </span>
                                <span>Miodrag Blagojević, Filip Kuljanin, Radmilo Borovina</span>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <hr/>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</span>
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

export default MoviesDetailsModal;