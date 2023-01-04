import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

//Components
import OutlineButton from '@/components/OutlineButton';
import './HeaderFix.scss';
import { Button } from '@mui/material';

interface ActionType {
    content: string;
    component: FunctionComponent | any; //fix
    variant: string | undefined;
    className?: string;
    to?: string;
    href?: string;
    children?: [];
    onClick?: () => void;
}

export const ACTION_BUTTON_LIST: ActionType[] = [
    {
        content: 'Join Fiverr',
        component: OutlineButton,
        variant: undefined,
        className: 'header__btn header__btn--outline hide-on-pc-tablet',
        to: '/auth/sign-up',
    },
    {
        content: 'Sign in',
        component: Link,
        variant: 'text',
        className: 'header__btn header__btn--text',
        to: '/auth/sign-in',
    },
    {
        content: 'Browser Categories',
        component: Button,
        variant: 'text',
        className: 'header__btn header__btn--text hide-on-pc-tablet',
    },
    {
        content: 'Become a Seller',
        component: Link,
        variant: 'text',
        className: 'header__btn header__btn--text',
        to: '/',
    },
    {
        content: 'Join',
        component: OutlineButton,
        variant: undefined,
        className: 'header__btn header__btn--outline hide-on-mobile',
        to: '/auth/sign-up',
    },
];
