import { lazy } from 'react';
import { DefaultLayout, HeaderFooterLayout } from '@/components/Layout';

//Pages
const HomePage = lazy(() => import('@/pages/Home'));
const JobListPage = lazy(() => import('@/pages/JobListPage'));
const JobDetailsPage = lazy(() => import('@/pages/JobDetailsPage'));
const ProfilePage = lazy(() => import('@/pages/Profile'));

const CLIENT_ROUTES = [
    {
        path: '/',
        component: HomePage,
        layout: HeaderFooterLayout,
    },
    {
        path: '/job-list/:id',
        component: JobListPage,
        layout: DefaultLayout,
    },
    {
        path: '/job-category/:id',
        component: JobListPage,
        layout: DefaultLayout,
    },
    {
        path: '/job-details/:id',
        component: JobDetailsPage,
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        component: ProfilePage,
        layout: DefaultLayout,
    },
];

export default CLIENT_ROUTES;
