import { lazy } from 'react';

//Layouts
import AuthenLayout from '@/components/Layout/AuthenLayout';
import { authRoutes } from '@/configs/routes';

//Pages
const SignIn = lazy(() => import('@/pages/SignIn'));
const Register = lazy(() => import('@/pages/Register'));

const AUTH_ROUTES = [
    { path: authRoutes.home, component: SignIn, layout: AuthenLayout },
    {
        path: authRoutes.signIn,
        component: SignIn,
        layout: AuthenLayout,
    },
    {
        path: authRoutes.signUp,
        component: Register,
        layout: AuthenLayout,
    },
];

export default AUTH_ROUTES;
