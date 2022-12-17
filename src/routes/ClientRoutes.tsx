import { DefaultLayout, HeaderFooterLayout } from '@/components/Layout';
import { Fragment, lazy } from 'react';

//Pages
const HomePage = lazy(() => import('@/pages/Home'));
const JobListPage = lazy(() => import('@/pages/JobListPage'));

const ClientRoutes = [
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
];

export default ClientRoutes;
