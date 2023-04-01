import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from "yup";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import dayjs from 'dayjs';
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';

/**
 * Repertory Form Validation Schema
 */
const schema = yup.object().shape({
    movie: yup.string()
        .required('Required field'),
    dateTime: yup.string()
        .required('Required field'),
    numberOfTickets: yup.number()
        .required('Required field')
        .nullable()
        .typeError('Number of Tickets must be a number')
        .min(1, 'Number of Tickets must be greater than or equal to 1'),
    price: yup.number()
        .required('Required field')
        .nullable()
        .typeError('Price must be a number')
        .min(1, 'Price must be greater than or equal to 1'),
});

const RepertoryFormModal = ({open, setOpen}) => {
    const [dateTimeValue, setDateTimeValue] = React.useState(null);

    const handleClose = () => {
        setOpen(false);
    };

    const {control, formState, handleSubmit, setError, setValue} = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const {isValid, dirtyFields, errors} = formState;

    function onSubmit({
                          movie,
                          dateTime,
                          numberOfTickets,
                          price
                      }) {
        console.log(
            movie,
            dateTime,
            numberOfTickets,
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
            >
                <DialogTitle id="repertory-form-title" className="flex items-center">
                    Add/Edit Repertory
                </DialogTitle>
                <form
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
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            className="mb-24 col-span-1 md:col-span-2"
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

                                <Controller
                                    name="dateTime"
                                    control={control}
                                    render={({field}) => (
                                        // <TextField
                                        //     {...field}
                                        //     className="mb-24"
                                        //     label="Date and Time"
                                        //     type="text"
                                        //     variant="outlined"
                                        //     error={!!errors.dateTime}
                                        //     helperText={errors?.dateTime?.message}
                                        //     required
                                        //     fullWidth
                                        //     size="small"
                                        // />
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField {...field} {...props} size="small"
                                                                                   required
                                                                                   error={!!errors.dateTime} fullWidth
                                                                                   className="mb-24"
                                                                                   helperText={errors?.dateTime?.message}/>}
                                                label="Date and Time"
                                                value={dateTimeValue}
                                                onChange={(newValue) => {
                                                    setDateTimeValue(newValue);
                                                }}
                                            />
                                        </LocalizationProvider>
                                    )}
                                />

                                <Controller
                                    name="price"
                                    control={control}
                                    render={({field}) => (
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
                                                inputProps: {min: 1, step: 0.1}
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
                            Add/Edit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default RepertoryFormModal;