import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function UserMenu() {
    const CURRENT_USER = JSON.parse(localStorage.getItem("current_user"));
    const [userMenu, setUserMenu] = useState(null);

    const userMenuClick = (event) => {
        setUserMenu(event.currentTarget);
    };

    const userMenuClose = () => {
        setUserMenu(null);
    };

    return (
        <>
            <Button
                className="min-h-40 min-w-40 px-0 md:px-16 py-0 md:py-6"
                onClick={userMenuClick}
                color="inherit"
            >
                <div className="hidden md:flex flex-col mx-4 items-end">
                    <Typography component="span" className="font-semibold flex">
                        {CURRENT_USER?.first_name + " " + CURRENT_USER?.last_name}
                    </Typography>
                    <Typography className="text-11 font-medium" color="text.secondary">
                        {CURRENT_USER?.email}
                    </Typography>
                </div>
                <Avatar className="md:mx-4 text-black">{CURRENT_USER?.first_name.charAt(0) + CURRENT_USER?.last_name.charAt(0)}</Avatar>
            </Button>

            <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                classes={{
                    paper: 'py-8',
                }}
            >
                <>
                    <MenuItem component={Link} to="/apps/profile" onClick={userMenuClose} role="button">
                        <ListItemIcon className="min-w-40">
                            <FuseSvgIcon>heroicons-outline:user-circle</FuseSvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="My Profile" />
                    </MenuItem>

                    <MenuItem
                        component={NavLink}
                        to="/sign-out"
                        onClick={() => {
                            userMenuClose();
                        }}
                    >
                        <ListItemIcon className="min-w-40">
                            <FuseSvgIcon>heroicons-outline:logout</FuseSvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Sign out" />
                    </MenuItem>
                </>
            </Popover>
        </>
    );
}

export default UserMenu;
