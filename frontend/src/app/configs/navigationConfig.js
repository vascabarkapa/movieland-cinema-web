const navigationConfig = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'heroicons-outline:chart-bar',
        url: 'dashboard',
    },
    {
        id: 'settings',
        title: 'Settings',
        subtitle: 'Manage the operation of the cinema',
        type: 'group',
        children: [
            {
                id: 'settings.movies',
                title: 'Movies',
                type: 'item',
                icon: 'heroicons-outline:video-camera',
                url: '/settings/movies',
            },
            {
                id: 'settings.repertory',
                title: 'Repertory',
                type: 'item',
                icon: 'heroicons-outline:desktop-computer',
                url: '/settings/repertory',
            },
            {
                id: 'settings.tickets',
                title: 'Tickets',
                type: 'item',
                icon: 'heroicons-outline:ticket',
                url: '/settings/tickets',
            },
            {
                id: 'settings.users',
                title: 'Users',
                type: 'item',
                icon: 'heroicons-outline:user-group',
                url: '/settings/users',
            },
        ],
    },
    {
        id: 'about',
        title: 'Our Cinema',
        subtitle: 'Find out the details of the cinema',
        type: 'group',
        children: [
            {
                id: 'settings.movies',
                title: 'About',
                type: 'item',
                icon: 'heroicons-outline:question-mark-circle',
                url: '/about',
            },
        ],
    },
];

export default navigationConfig;
