import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as yup from 'yup';
import _ from '@lodash';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {useEffect} from 'react';
import jwtService from '../../auth/services/jwtService';

/**
 * Form Validation Schema
 */
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
    const {control, formState, handleSubmit, setError, setValue} = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(schema),
    });

    const {isValid, dirtyFields, errors} = formState;

    useEffect(() => {
        setValue('email', 'admin@fusetheme.com', {shouldDirty: true, shouldValidate: true});
        setValue('password', 'admin', {shouldDirty: true, shouldValidate: true});
    }, [setValue]);

    function onSubmit({email, password}) {
        jwtService
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                // No need to do anything, user data will be set at app/auth/AuthContext
            })
            .catch((_errors) => {
                _errors.forEach((error) => {
                    setError(error.type, {
                        type: 'manual',
                        message: error.message,
                    });
                });
            });
    }

    return (
        <div
            className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
            <Paper
                className="flex justify-center items-center h-full sm:h-auto md:flex md:items-center md:justify-end w-full sm:w-auto md:h-full md:w-1/2 py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
                <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
                    <img className="w-1/5" src="assets/images/logo/movieland_logo2.svg" alt="logo"/>

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
                            render={({field}) => (
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
                            render={({field}) => (
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
                            className=" w-full mt-16"
                            aria-label="Sign in"
                            disabled={_.isEmpty(dirtyFields) || !isValid}
                            type="submit"
                            size="large"
                        >
                            Sign in
                        </Button>

                    </form>
                </div>
            </Paper>

            <Box
                className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden"
                sx={{
                    backgroundImage: 'url(/assets/images/demo-content/signin_wallpaper.png)',
                    backgroundPosition: 'center'
                }}
            >
                <div className="z-10 relative w-full max-w-2xl">
                    <div className="text-7xl text-right font-bold leading-none text-black">
                        <div>Welcome to</div>
                        <div>our cinema</div>
                    </div>
                    <div className="mt-24 text-lg text-right tracking-tight leading-6 text-black">
                        Following the modern times and adapting the film<br/>industry to today's digital devices,
                        Movieland
                        Cinema<br/>offers you unforgettable film experiences.
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default SignInPage;