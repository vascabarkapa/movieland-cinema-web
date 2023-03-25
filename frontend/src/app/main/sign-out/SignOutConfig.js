import SignOutPage from './SignOutPage';
import { Navigate } from 'react-router-dom';

const ACCESS_TOKEN = localStorage.getItem("access_token");

const SignOutConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: 'sign-out',
      element: !ACCESS_TOKEN ? <SignOutPage /> : <Navigate to="/" />,
    },
  ],
};

export default SignOutConfig;
