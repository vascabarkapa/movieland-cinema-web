import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import { Autocomplete, InputAdornment } from "@mui/material";
import dayjs from 'dayjs';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from "react";
import RepertoryService from "../../../../shared/services/repertory-service";
import MovieService from 'src/app/shared/services/movie-service';

const schema = yup.object().shape({
    movie: yup.string()
        .required('Required field'),
    price: yup.number()
        .required('Required field')
        .nullable()
        .typeError('Price must be a number')
        .min(1, 'Price must be greater than or equal to 1'),
});

const RepertoryFormModal = ({ open, setOpen, id }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const [editMovieRepertory, setEditMovieRepertory] = useState({});
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        MovieService.getMovies().then((movieResponse) => {
            if (movieResponse) {
                setMovies(movieResponse?.data);

                if (id) {
                    RepertoryService.getMovieByIdFromRepertory(id).then((repertoryResponse) => {
                        if (repertoryResponse) {
                            setEditMovieRepertory(response?.data);
                            setIsLoaded(true);
                        }
                    })
                } else {
                    setIsLoaded(true);
                }
            }
        })
    }, [])


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { control, formState, handleSubmit, setError, setValue } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const { isValid, dirtyFields, errors } = formState;

    function onSubmit({
        movie,
        dateTime,
        price
    }) {
        console.log(
            movie,
            selectedDate.toISOString(),
            price
        )
        console.log('COMING SOON');
        setOpen(false);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="repertory-form-title"
                aria-describedby="repertory-form-content"
                fullWidth
                maxWidth="sm"
                className={!isLoaded && "animate-pulse"}
            >
                <DialogTitle id="repertory-form-title" className="flex items-center">
                    {id ? "Edit Repertory" : "Add Movie to Repertory"}
                </DialogTitle>
                {isLoaded ? <form
                    name="repertoryForm"
                    noValidate
                    className="flex flex-col justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <DialogContent>
                        <DialogContentText id="repertory-form-content">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
                                <Controller
                                    name="movie"
                                    control={control}
                                    render={({ field }) => (
                                        <Autocomplete
                                            {...field}
                                            className="mb-24 col-span-1 md:col-span-2"
                                            disablePortal
                                            id="movie"
                                            options={movies}
                                            getOptionLabel={(option) => option.name + " [" + option.genre + "]"}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Movie"
                                                    type="text"
                                                    variant="outlined"
                                                    error={!!errors.movie}
                                                    helperText={errors?.movie?.message}
                                                    required
                                                    fullWidth
                                                    size="small"
                                                />
                                            )}
                                        />
                                    )}
                                />


                                <Controller
                                    name="dateTime"
                                    control={control}
                                    render={({ field }) => (
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField
                                                    {...field}
                                                    {...props}
                                                    size="small"
                                                    fullWidth
                                                    className="mb-24"
                                                />}
                                                inputFormat="DD.MM.YYYY HH:mm"
                                                ampm={false}
                                                label="Date and Time"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                            />
                                        </LocalizationProvider>
                                    )}
                                />

                                <Controller
                                    name="price"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            className="mb-24"
                                            label="Price"
                                            type="number"
                                            variant="outlined"
                                            error={!!errors.price}
                                            helperText={errors?.price?.message}
                                            required
                                            fullWidth
                                            size="small"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        &euro;
                                                    </InputAdornment>
                                                ),
                                                inputProps: { min: 1, step: 0.1 }
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>
                            Close
                        </Button>
                        <Button type="submit" color="secondary">
                            {!isLoading ? (id ? "Edit" : "Add") :
                                <img height={25} width={25} src="/assets/images/logo/movieland_main.svg"
                                    alt="movieland_cinema_loading_logo"></img>}
                        </Button>
                    </DialogActions>
                </form> : <></>}
            </Dialog>
        </div>
    );
}

export default RepertoryFormModal;