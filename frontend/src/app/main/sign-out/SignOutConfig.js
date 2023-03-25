import SignOutPage from './SignOutPage';
import { Navigate } from 'react-router-dom';

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
      element: <SignOutPage />,
    },
  ],
};

export default SignOutConfig;
