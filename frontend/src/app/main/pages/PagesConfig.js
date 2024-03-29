import Dashboard from "./dashboard/Dashboard";
import Movies from "./movies/Movies";
import Tickets from "./tickets/Tickets";
import Users from "./users/Users";
import Repertory from "./repertory/Repertory";
import UsersForm from "./users/components/UsersForm";
import About from "./about/About";
import MoviesForm from "./movies/components/MoviesForm";
import RepertorySeatReservations from "./repertory/components/RepertorySeatReservations";

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
                    path: 'movies/create',
                    element: <MoviesForm/>,
                },
                {
                    path: 'movies/edit/:id',
                    element: <MoviesForm/>,
                },
                {
                    path: 'repertory',
                    element: <Repertory/>,
                },
                {
                    path: 'repertory/reservations/:id',
                    element: <RepertorySeatReservations/>,
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
                {
                    path: 'users/edit/:id',
                    element: <UsersForm/>,
                },
            ],
        },
        {
            path: 'about',
            element: <About/>,
        },
    ],
};

export default PagesConfig;