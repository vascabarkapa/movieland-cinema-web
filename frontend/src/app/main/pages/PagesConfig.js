import Dashboard from "./dashboard/Dashboard";
import Movies from "./movies/Movies";
import Tickets from "./tickets/Tickets";
import Users from "./users/Users";
import Repertory from "./repertory/Repertory";
import UsersForm from "./users/components/UsersForm";

const PagesConfig = {
    settings: {
        layout: {
            config: {},
        },
    },
    routes: [
        {
            path: 'dashboard',
            element: <Dashboard/>,
        },
        {
            path: 'settings',
            children: [
                {
                    path: 'movies',
                    element: <Movies/>,
                },
                {
                    path: 'repertory',
                    element: <Repertory/>,
                },
                {
                    path: 'tickets',
                    element: <Tickets/>,
                },
                {
                    path: 'users',
                    element: <Users/>,
                },
                {
                    path: 'users/create',
                    element: <UsersForm/>,
                },
            ],
        },
    ],
};

export default PagesConfig;