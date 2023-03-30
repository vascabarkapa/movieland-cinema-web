import Card from "@mui/material/Card";
import { CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    username: yup.string()
        .required('Required field'),
    email: yup.string()
        .required('Required field')
        .email('Wrong email format'),
    password: yup.string()
        .required('Required field')
        .min(8, 'Should be 8 chars minimum'),
    confirmPassword: yup.string()
        .required('Required field')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    firstName: yup.string()
        .required('Required field'),
    lastName: yup.string()
        .required('Required field'),
});

const UsersForm = () => {
    const navigate = useNavigate();

    const { control, formState, handleSubmit, setError, setValue } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const { isValid, dirtyFields, errors } = formState;

    const handleBack = () => {
        navigate("/settings/users");
    }

    function onSubmit({
        username,
        email,
        password,
        firstName,
        lastName
    }) {
        console.log(
            username,
            email,
            password,
            firstName,
            lastName
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
                        New/Edit User
                    </Typography>
                </CardContent>

                <form
                    name="usersForm"
                    noValidate
                    className="flex flex-col justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <CardContent>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20">
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24"
                                        label="First Name"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.firstName}
                                        helperText={errors?.firstName?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24"
                                        label="Last Name"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.lastName}
                                        helperText={errors?.lastName?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="username"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24"
                                        label="Username"
                                        type="text"
                                        variant="outlined"
                                        error={!!errors.username}
                                        helperText={errors?.username?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24"
                                        label="Email"
                                        type="email"
                                        variant="outlined"
                                        error={!!errors.email}
                                        helperText={errors?.email?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20">
                            <div className="col-span-1 sm:col-span-2 mb-20">
                                <hr />
                            </div>

                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24"
                                        label="Password"
                                        type="password"
                                        variant="outlined"
                                        error={!!errors.password}
                                        helperText={errors?.password?.message}
                                        required
                                        fullWidth
                                        size="small"
                                    />
                                )}
                            />

                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        className="mb-24"
                                        label="Confirm Password"
                                        type="password"
                                        variant="outlined"
                                        error={!!errors.confirmPassword}
                                        helperText={errors?.confirmPassword?.message}
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

export default UsersForm;