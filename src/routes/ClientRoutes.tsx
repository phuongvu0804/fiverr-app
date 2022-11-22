import { lazy } from 'react';

//Layouts
const DefaultLayout = lazy(() => import('@/components/Layout/DefaultLayout'));

//Pages
const HomePage = lazy(() => import('@/pages/Home'));

const ClientRoutes = {
    path: '/',
    element: (
        <DefaultLayout>
            <HomePage />
        </DefaultLayout>
    ),
    children: [],
};

export default ClientRoutes;
