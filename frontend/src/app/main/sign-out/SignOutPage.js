import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';

function SignOutPage() {
    useEffect(() => {
        setTimeout(() => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("current_user");
            window.location.href = "sign-in";
        }, 500);
    }, []);

    return (
        <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0">
            <Paper
                className="flex items-center w-full sm:w-auto min-h-full sm:min-h-auto rounded-0 py-32 px-16 sm:p-48 sm:rounded-2xl sm:shadow">
                <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
                    <img className="w-1/5 mx-auto" src="assets/images/logo/movieland_main.svg" alt="logo" />
                    <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight text-center">
                        You have signed out!
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

export default SignOutPage;
