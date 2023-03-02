import { lazy } from 'react';
import { DefaultLayout, HeaderFooterLayout } from '@/components/Layout';
import { clientRoutes } from '@/configs/routes';

//Pages
const HomePage = lazy(() => import('@/pages/Home'));
const JobListPage = lazy(() => import('@/pages/JobListPage'));
const JobDetailsPage = lazy(() => import('@/pages/JobDetailsPage'));
const ProfilePage = lazy(() => import('@/pages/Profile'));

const CLIENT_ROUTES = [
    {
        path: clientRoutes.home,
        component: HomePage,
        layout: HeaderFooterLayout,
    },
    {
        path: clientRoutes.JobListPage,
        component: JobListPage,
        layout: DefaultLayout,
    },
    {
        path: clientRoutes.JobCategoryPage,
        component: JobListPage,
        layout: DefaultLayout,
    },
    {
        path: clientRoutes.JobDetailsPage,
        component: JobDetailsPage,
        layout: DefaultLayout,
    },
    {
        path: clientRoutes.ProfilePage,
        component: ProfilePage,
        layout: DefaultLayout,
    },
];

export default CLIENT_ROUTES;
