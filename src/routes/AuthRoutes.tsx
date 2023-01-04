import { lazy } from 'react';

//Layouts
import AuthenLayout from '@/components/Layout/AuthenLayout';

//Pages
const SignIn = lazy(() => import('@/pages/SignIn'));
const Register = lazy(() => import('@/pages/Register'));

const AUTH_ROUTES = [
    { path: 'auth', component: SignIn, layout: AuthenLayout },
    {
        path: '/auth/sign-in',
        component: SignIn,
        layout: AuthenLayout,
    },
    {
        path: '/auth/sign-up',
        component: Register,
        layout: AuthenLayout,
    },
];

export default AUTH_ROUTES;
