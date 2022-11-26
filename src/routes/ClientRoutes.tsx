import { HeaderFooterLayout } from '@/components/Layout';
import { Fragment, lazy } from 'react';

//Pages
const HomePage = lazy(() => import('@/pages/Home'));
const JobCategoriesPage = lazy(() => import('@/pages/JobCategories'));

const ClientRoutes = [
    {
        path: '/',
        component: HomePage,
        layout: HeaderFooterLayout,
    },
    {
        path: '/categories',
        component: JobCategoriesPage,
        layout: HeaderFooterLayout,
    },
];

export default ClientRoutes;
