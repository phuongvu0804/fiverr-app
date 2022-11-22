import { lazy } from 'react';

//Layouts
import AuthenLayout from '@/components/Layout/AuthenLayout';

//Pages
const SignIn = lazy(() => import('@/pages/SignIn'));
const Register = lazy(() => import('@/pages/Register'));

const AuthRoutes = [
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

export default AuthRoutes;
