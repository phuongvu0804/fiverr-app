import { Fragment, lazy } from 'react';

//Pages
const HomePage = lazy(() => import('@/pages/Home'));
const JobCategoriesPage = lazy(() => import('@/pages/JobCategories'));

const ClientRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: Fragment,
    },
    {
        path: '/categories',
        component: JobCategoriesPage,
        layout: Fragment,
    },
];

export default ClientRoutes;
