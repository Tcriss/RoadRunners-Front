import { Link } from "../interfaces";

export const links: Link[] = [
    {
        icon: 'fi fi-bs-home',
        name: 'Inicio',
        path: '/explore/home'
    },
    {
        icon: 'fi fi-rr-car',
        name: 'Vehiculos',
        path: '/explore/vehicles'
    },
    {
        icon: 'fi fi-rr-megaphone',
        name: 'Publicar',
        path: '/publish/sell'
    },
];

export const optionLinks: Link[] = [
    {
        icon: 'fi fi-rr-user',
        name: 'Pérfil',
        path: '/settings/profile'
    },
    {
        icon: 'fi fi-rr-car',
        name: 'Vehículos publicados',
        path: '/settings/my-posts'
    },
];