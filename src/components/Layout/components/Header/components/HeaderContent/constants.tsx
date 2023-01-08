import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

//Components
import OutlineButton from '@/components/OutlineButton';
import { Button } from '@mui/material';
import { ButtonPropType } from '@/constants/intefaces';
import SideBarMobile from './components/SideBarMobile';

export interface ActionType {
    content: string;
    component: FunctionComponent | any; //fix
    variant?: string | undefined;
    className?: string;
    to?: string;
    href?: string;
    children?: [];
}

export const NO_USER_ACTION_BUTTON_LIST: ActionType[] = [
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

export const WITH_USER_ACTION_BUTTON_LIST: ActionType[] = [
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
];

//Toggle user menu when click in user button (for signed in case)
export const handleOpenUserMenu = (
    event: React.MouseEvent<HTMLElement>,
    setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
) => {
    setAnchorElUser(event.currentTarget);
};

export const handleCloseUserMenu = (setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
    setAnchorElUser(null);
};

//Toggle Menu in Mobile screen
export const toggleDrawer = (
    e: any, //Fix later
    open: boolean,
    setDrawer: React.Dispatch<React.SetStateAction<boolean>>,
) => {
    if (
        e.type === 'keydown' &&
        ((e as React.KeyboardEvent).key === 'Tab' || (e as React.KeyboardEvent).key === 'Shift')
    ) {
        return;
    }

    setDrawer(open);
};

//Render buttons in Header
export const renderActionButtonList = (buttonList: ActionType[]) => {
    return buttonList.map((button, index) => {
        let props: ButtonPropType = {};
        if (button.to) {
            props.to = button.to;
        } else if (button.href) {
            props.href = button.href;
        }

        return (
            <button.component key={index} className={button.className} variant={button.variant} {...props}>
                {button.content}
            </button.component>
        );
    });
};

//Render side bar in mobile
export const renderMobileMenu = (
    isSignedIn: boolean,
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>,
    buttonListData: ActionType[],
    setButtonListData: React.Dispatch<React.SetStateAction<ActionType[]>>,
    userName: string = '',
    userFirstLetter: string,
) => {
    if (isSignedIn) {
        return (
            <SideBarMobile
                userFirstLetter={userFirstLetter}
                userName={userName}
                buttonListData={buttonListData}
                setButtonListData={setButtonListData}
                setIsSignedIn={setIsSignedIn}
            />
        );
    } else {
        return renderActionButtonList(buttonListData);
    }
};

//Handle sign out
export const handleUserSignOut = (
    setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>,
    setButtonListData: React.Dispatch<React.SetStateAction<ActionType[]>>,
) => {
    localStorage.removeItem('fiver_user');

    setIsSignedIn(false);

    setButtonListData(NO_USER_ACTION_BUTTON_LIST);
};
