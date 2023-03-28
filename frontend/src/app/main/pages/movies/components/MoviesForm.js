import Card from "@mui/material/Card";
import { CardActions, CardContent, InputLabel, OutlinedInput, Select } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import MovieService from "src/app/shared/services/movie-service";

const schema = yup.object().shape({
    name: yup.string()
        .required('Required field'),
    /*     genre: yup.string()
            .required('Required field'), */
    duration: yup.string()
        .required('Required field'),
    description: yup.string()
        .required('Required field'),
    direction: yup.string()
        .required('Required field'),
    actors: yup.string()
        .required('Required field'),
    rating: yup.number()
        .required('Required field')
        .nullable()
        .typeError('Rating must be a number')
        .min(1, 'Rating must be greater than or equal to 1')
        .max(10, 'Rating must be less than or equal to 10'),
});

function getStyles(genre, movieGenres, theme) {
    return {
        fontWeight:
            movieGenres.indexOf(genre) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const genresList = [
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Horror',
    'Mystery',
    'Romance',
    'Thriller',
];

const MoviesForm = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [movieGenres, setMovieGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        console.log(value)
        setMovieGenres(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const { control, formState, handleSubmit, setError, setValue } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const { isValid, dirtyFields, errors } = formState;

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
        setIsLoading(true);
        const body = JSON.stringify({
            name: name,
            genre: movieGenres.join(', '),
            duration: duration,
            description: description,
            direction: direction,
            actors: actors,
            rating: rating
        })

        MovieService.createMovie(body).then((response) => {
            if (response) {
                navigate("/settings/movies");
                setIsLoading(false);
            }
        })
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
                                render={({ field }) => (
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
                                render={({ field }) => (
                                    // <TextField
                                    //     {...field}
                                    //     className="mb-24 col-span-1 md:col-span-2"
                                    //     label="Genre"
                                    //     type="text"
                                    //     variant="outlined"
                                    //     error={!!errors.genre}
                                    //     helperText={errors?.genre?.message}
                                    //     required
                                    //     fullWidth
                                    //     size="small"
                                    // />
                                    <FormControl required className="mb-24 col-span-1 md:col-span-2" size="small">
                                        <InputLabel id="genre">Genre</InputLabel>
                                        <Select
                                            {...field}
                                            labelId="genre"
                                            id="genre"
                                            multiple
                                            placeholder="Konj"
                                            /*                                             error={!!errors.genre}
                                                                                        helperText={errors?.genre?.message} */
                                            value={movieGenres}
                                            onChange={handleChange}
                                            input={<OutlinedInput label="Genre" />}
                                        >
                                            {genresList.map((genre) => (
                                                <MenuItem
                                                    key={genre}
                                                    value={genre}
                                                    style={getStyles(genre, movieGenres, theme)}
                                                >
                                                    {genre}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />

                            <Controller
                                name="duration"
                                control={control}
                                render={({ field }) => (
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
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-2"
                                        label="Rating"
                                        type="number"
                                        variant="outlined"
                                        error={!!errors.rating}
                                        helperText={errors?.rating?.message}
                                        required
                                        fullWidth
                                        InputProps={{ inputProps: { min: 1, max: 10, step: 0.1 } }}
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="description"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24 col-span-1 md:col-span-6"
                                        label="Description"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.description}
                                        helperText={errors?.description?.message}
                                        required
                                        multiline
                                        rows={8}
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="direction"
                                control={control}
                                render={({ field }) => (
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
                                render={({ field }) => (
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
                            className={isLoading ? "hidden" : "w-120"}
                            disabled={isLoading}
                            onClick={handleBack}
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            type="submit"
                            className={isLoading ? "w-120 animate-bounce" : "w-120"}
                            disabled={isLoading}
                        >
                            {!isLoading ? "Add" : <img height={25} width={25} src="/assets/images/logo/movieland_main.svg" alt="movieland_cinema_loading_logo"></img>}
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    )
}

export default MoviesForm;