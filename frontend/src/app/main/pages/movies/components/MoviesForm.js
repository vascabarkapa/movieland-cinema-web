import Card from "@mui/material/Card";
import {CardActions, CardContent, InputLabel, Select} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import {useNavigate} from "react-router-dom";

/**
 * Movies Form Validation Schema
 */
const schema = yup.object().shape({
    name: yup.string()
        .required('Required field'),
    genre: yup.string()
        .required('Required field'),
    duration: yup.string()
        .required('Required field'),
    description: yup.string()
        .required('Required field'),
    direction: yup.string()
        .required('Required field'),
    actors: yup.string()
        .required('Required field'),
    rating: yup.string()
        .required('Required field'),
});

const MoviesForm = () => {
    const navigate = useNavigate();

    const {control, formState, handleSubmit, setError, setValue} = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const {isValid, dirtyFields, errors} = formState;

    const handleBack = () => {
        navigate("/settings/movies");
    }

    function onSubmit({
                          name,
                          genre,
                          duration,
                          description,
                          direction,
                          actors,
                          rating
                      }) {
        console.log(
            name,
            genre,
            duration,
            description,
            direction,
            actors,
            rating
        )
        console.log('COMING SOON')
    }

    // loadovati podatke
    // useEffect(() => {
    //     setValue('username', '',{shouldDirty: true, shouldValidate: true});
    // }, [setValue]);

    return (
        <div className="p-36">
            <Card>
                <CardContent>
                    <Typography className="text-3xl text-center sm:text-left font-semibold tracking-tight leading-8">
                        New/Edit Movie
                    </Typography>
                </CardContent>

                <form
                    name="moviesForm"
                    noValidate
                    className="flex flex-col justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-x-20">
                            <Controller
                                name="name"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-6"
                                        label="Name"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.name}
                                        helperText={errors?.name?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="genre"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-2"
                                        label="Genre"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.genre}
                                        helperText={errors?.genre?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="duration"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-2"
                                        label="Duration"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.duration}
                                        helperText={errors?.duration?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="rating"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-2"
                                        label="Rating"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.rating}
                                        helperText={errors?.rating?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="description"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-6"
                                        label="Description"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.description}
                                        helperText={errors?.description?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="direction"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-3"
                                        label="Direction"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.direction}
                                        helperText={errors?.direction?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="actors"
                                control={control}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-3"
                                        label="Actors"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.actors}
                                        helperText={errors?.actors?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />
                        </div>
                    </CardContent>

                    <CardActions className="flex sm:justify-end justify-center">
                        <Button
                            variant="contained"
                            color="primary"
                            type="button"
                            className="w-120"
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            className="w-120"
                        >
                            Add
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    )
}

export default MoviesForm;