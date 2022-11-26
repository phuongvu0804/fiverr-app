import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

//Components
import OutlineButton from '@/components/OutlineButton';
import './Header.scss';

interface ActionType {
    content: string;
    component: FunctionComponent | any; //fix
    variant: string | undefined;
    className?: string;
    to?: string;
    href?: string;
    onClick?: () => void;
}

export const actionButtonList: ActionType[] = [
    {
        content: 'Join Fiverr',
        component: OutlineButton,
        variant: undefined,
        className: 'header__btn header__btn--outline hide-on-pc-tablet',
        to: '/auth/sign-up',
    },
    {
        content: 'Become a Seller',
        component: Link,
        variant: 'text',
        className: 'header__btn header__btn--text',
        to: '/',
    },
    {
        content: 'Sign in',
        component: Link,
        variant: 'text',
        className: 'header__btn header__btn--text',
        to: '/auth/sign-in',
    },
    {
        content: 'Join',
        component: OutlineButton,
        variant: undefined,
        className: 'header__btn header__btn--outline hide-on-mobile',
        to: '/auth/sign-up',
    },
];
