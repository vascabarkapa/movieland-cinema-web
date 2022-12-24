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

/**
 * Repertory Form Validation Schema
 */
const schema = yup.object().shape({
    movie: yup.string()
        .required('Required field'),
    dateTime: yup.string()
        .required('Required field'),
    numberOfTickets: yup.string()
        .required('Required field'),
    price: yup.string()
        .required('Required field'),
});

const RepertoryFormModal = ({open, setOpen}) => {

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
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-20">
                                <Controller
                                    name="movie"
                                    control={control}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            className="mb-24 col-span-1 sm:col-span-3"
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
                                        <TextField
                                            {...field}
                                            className="mb-24"
                                            label="Date and Time"
                                            type="text"
                                            variant="outlined"
                                            error={!!errors.dateTime}
                                            helperText={errors?.dateTime?.message}
                                            required
                                            fullWidth
                                            size="small"
                                        />
                                    )}
                                />

                                <Controller
                                    name="numberOfTickets"
                                    control={control}
                                    render={({field}) => (
                                        <TextField
                                            {...field}
                                            className="mb-24"
                                            label="Number of Tickets"
                                            type="text"
                                            variant="outlined"
                                            error={!!errors.numberOfTickets}
                                            helperText={errors?.numberOfTickets?.message}
                                            required
                                            fullWidth
                                            size="small"
                                        />
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
                                            type="text"
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