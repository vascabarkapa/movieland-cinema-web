import SignUpPage from './SignUpPage';
import { Navigate } from 'react-router-dom';

const ACCESS_TOKEN = localStorage.getItem("access_token");

const SignUpConfig = {
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
      path: 'sign-up',
      element: !ACCESS_TOKEN ? <SignUpPage /> : <Navigate to="/" />,
    },
  ],
};

export default SignUpConfig;
