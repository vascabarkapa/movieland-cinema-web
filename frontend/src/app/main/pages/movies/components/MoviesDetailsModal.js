import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const MoviesDetailsModal = ({ open, setOpen, movie }) => {
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
                    <span>{movie?.name}</span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="movies-details-content">
                        {movie?.image ? <div className="image-div">
                            <img className="image-img" src={movie.image || ''} alt="movie_image" />
                        </div> : <></>}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                            <div>
                                <span className="text-black font-500">Genre: </span>
                                <span>{movie?.genre}</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Duration: </span>
                                <span>{movie?.duration}</span>
                            </div>
                            <div>
                                <span className="text-black font-500">Rating: </span>
                                <span>{movie?.rating}/10</span>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <span className="text-black font-500">Direction: </span>
                                <span>{movie?.direction}</span>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <span className="text-black font-500">Actors: </span>
                                <span>{movie?.actors}</span>
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <hr />
                            </div>
                            <div className="col-span-1 sm:col-span-3">
                                <span>{movie?.description}</span>
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