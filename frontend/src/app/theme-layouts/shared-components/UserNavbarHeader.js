import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Root = styled('div')(({ theme }) => ({
  '& .username, & .email': {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },

  '& .avatar': {
    background: theme.palette.background.default,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const CURRENT_USER = JSON.parse(localStorage.getItem("current_user"));

  return (
    <Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
      <div className="flex items-center justify-center mb-24">
        <Avatar
          sx={{
            backgroundColor: 'background.paper',
            color: 'text.secondary',
          }}
          className="avatar text-32 font-bold w-96 h-96"
          src="assets/images/test_user.jpg"
          alt="test_user_pic"
        >
          {CURRENT_USER?.first_name.charAt(0) + CURRENT_USER?.last_name.charAt(0)}
        </Avatar>
      </div>
      <Typography className="username text-14 whitespace-nowrap font-medium">
        {CURRENT_USER?.first_name + " " + CURRENT_USER?.last_name}
      </Typography>
      <Typography className="email text-13 whitespace-nowrap font-medium" color="text.secondary">
        {CURRENT_USER?.email}
      </Typography>
    </Root>
  );
}

export default UserNavbarHeader;
