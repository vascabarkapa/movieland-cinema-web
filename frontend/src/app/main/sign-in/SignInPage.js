import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import AuthService from 'src/app/shared/services/auth-service';
import { useNavigate } from 'react-router-dom';
import { showMessage } from "app/store/fuse/messageSlice";
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
    email: yup.string().email('You must enter a valid email').required('You must enter a email'),
    password: yup
        .string()
        .required('Please enter your password.')
        .min(4, 'Password is too short - must be at least 4 chars.'),
});

const defaultValues = {
    email: '',
    password: '',
    remember: true,
};

function SignInPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const { control, formState, handleSubmit, setError, setValue } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });

    const { isValid, dirtyFields, errors } = formState;

    useEffect(() => {
        setValue('email', 'admin@movielandcinema.com', { shouldDirty: true, shouldValidate: true });
        setValue('password', 'admin', { shouldDirty: true, shouldValidate: true });
    }, [setValue]);

    function onSubmit({ email, password }) {
        setIsLoading(true);
        AuthService.login(email, password).then((response) => {
            if (response) {
                localStorage.setItem("access_token", response?.data?.accessToken);

                AuthService.currentUser().then((currentUser) => {
                    if (currentUser) {
                        localStorage.setItem("current_user", JSON.stringify(currentUser?.data));
                        setIsLoading(false);
                        // poslati na dashboard
                    }
                })
            }
        }, (err) => {
            if (err) {
                setIsLoading(false);
                dispatch(showMessage({ message: err?.response?.data?.message || "An error occurred! Try again." }));
            }
        })
    }

    return (
        <div
            className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
            <Paper
                className="flex justify-center items-center h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
                <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
                    <img className="w-1/5" src="assets/images/logo/movieland_main.svg" alt="logo" />

                    <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
                        Sign in
                    </Typography>
                    <div className="flex items-baseline mt-2 font-medium">
                        <Typography>Enter your credentials to log in to Movieland</Typography>
                    </div>

                    <form
                        name="loginForm"
                        noValidate
                        className="flex flex-col justify-center w-full mt-32"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="mb-24"
                                    label="Email"
                                    autoFocus
                                    type="email"
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    className="mb-24"
                                    label="Password"
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors?.password?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />

                        <Button
                            variant="contained"
                            color="secondary"
                            className={isLoading ? "w-full mt-16 animate-bounce" : "w-full mt-16"}
                            aria-label="Sign in"
                            disabled={_.isEmpty(dirtyFields) || !isValid || isLoading}
                            type="submit"
                            size="large"
                        >
                            {!isLoading ? "Sign In" : <img height={25} width={25} src="/assets/images/logo/movieland_main.svg" alt="movieland_cinema_loading_logo"></img>}
                        </Button>

                    </form>
                </div>
            </Paper>

            <Box
                className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden"
                sx={{
                    backgroundImage: 'url(/assets/images/cinema_hall.jpg)',
                    backgroundPosition: 'left'
                }}
            >
                <div className="z-10 relative w-full max-w-2xl">
                    <div className="text-7xl text-left font-bold leading-none text-white">
                        <div>Welcome to</div>
                        <div>our cinema</div>
                    </div>
                    <div className="mt-24 text-lg text-left tracking-tight leading-6 text-white">
                        Following the modern times and adapting the film<br />industry to today's digital devices,
                        Movieland
                        Cinema<br />offers you unforgettable film experiences.
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default SignInPage;