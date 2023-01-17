import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';
import {Link, useNavigate} from 'react-router-dom';
import Button from "@mui/material/Button";

function Error404Page() {
    const navigate = useNavigate();

    function navigateToDashboard() {
        navigate("/");
    }

    return (
        <div className="flex flex-col flex-1 items-center justify-center p-16">
            <div className="w-full max-w-3xl text-center">
                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0, transition: {delay: 0.2}}}
                >
                    <Typography
                        variant="h1"
                        className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-center"
                    >
                        Ooops... 404!
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0, transition: {delay: 0.2}}}
                >
                    <Typography
                        variant="h5"
                        color="text.secondary"
                        className="mt-8 text-lg md:text-xl font-medium tracking-tight text-center"
                    >
                        The page you requested could not be found.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, y: 40}}
                    animate={{opacity: 1, y: 0, transition: {delay: 0.2}}}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        className="w-50 mt-16"
                        aria-label="Back to dashboard"
                        type="button"
                        size="large"
                        onClick={() => navigateToDashboard()}
                    >
                        Back to Dashboard
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}

export default Error404Page;
