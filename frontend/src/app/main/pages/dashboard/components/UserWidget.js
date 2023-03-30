import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { memo } from 'react';

const UserWidget = ({ count }) => {
    return (
        <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between px-8 pt-12">
                <Typography
                    className="px-16 py-16 text-lg font-medium tracking-tight leading-6 truncate"
                    color="text.secondary"
                >
                    Number of users
                </Typography>
            </div>
            <div className="text-center mt-8 pb-44">
                <Typography className="text-7xl sm:text-9xl font-bold tracking-tight leading-none text-green-500">
                    {count}
                </Typography>
                <Typography className="text-lg font-medium text-green-600">
                    users
                </Typography>
            </div>
        </Paper>
    );
}

export default memo(UserWidget);
