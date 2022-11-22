import { lazy } from 'react';

//Layouts
const HeaderFooterLayout = lazy(() => import('@/components/Layout/HeaderFooterLayout'));

//Pages
const SignIn = lazy(() => import('@/pages/SignIn'));

const AuthRoutes = {
    path: 'auth',
    element: (
        <HeaderFooterLayout>
            <SignIn />
        </HeaderFooterLayout>
    ),
    children: [],
};

export default AuthRoutes;
