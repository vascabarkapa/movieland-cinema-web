import Dashboard from "./dashboard/Dashboard";
import Movies from "./movies/Movies";
import Tickets from "./tickets/Tickets";
import Users from "./users/Users";

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
                    path: 'tickets',
                    element: <Tickets/>,
                },
                {
                    path: 'users',
                    element: <Users/>,
                },
            ],
        },
    ],
};

export default PagesConfig;