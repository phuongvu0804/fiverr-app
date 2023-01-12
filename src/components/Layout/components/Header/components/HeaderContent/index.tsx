import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Material UI
import { Button, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {
    ActionType,
    handleCloseUserMenu,
    handleOpenUserMenu,
    handleUserSignOut,
    NO_USER_ACTION_BUTTON_LIST,
    renderActionButtonList,
    renderMobileMenu,
    toggleDrawer,
    WITH_USER_ACTION_BUTTON_LIST,
} from './constants';
import { UserDataProps } from '@/constants/intefaces';

//Others
import './HeaderContent.scss';
import UserDropDownBtn from './components/UserDropDownBtn';
import { useAppSelector } from '@/hooks';
import { LOCAL_STORAGE_USER_NAME } from '@/constants/constants';
import SideBarMobile from './components/SideBarMobile';

const HeaderContent = () => {
    const navigate = useNavigate();
    const USER_INFO: UserDataProps = useAppSelector((state) => state.user.data);
    const [drawer, setDrawer] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [buttonListData, setButtonListData] = useState<ActionType[]>(NO_USER_ACTION_BUTTON_LIST);
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [userFirstLetter, setUserFirstLetter] = useState<string>('');

    useEffect(() => {
        //Check if user has signed in
        let user = window.localStorage.getItem(LOCAL_STORAGE_USER_NAME);
        if (user) {
            user = JSON.parse(user);
            //Change content of header
            setIsSignedIn(true);
            setButtonListData(WITH_USER_ACTION_BUTTON_LIST);

            //Change content of user button
            setUserFirstLetter(USER_INFO?.name.charAt(0).toUpperCase());
        }
    }, [USER_INFO]);

    return (
        <div className="header__content container-center">
            <Button className="header__drawer-btn hide-on-pc-tablet" onClick={(e) => toggleDrawer(e, true, setDrawer)}>
                <MenuIcon />
            </Button>

            <a href="/" className="header__logo">
                <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
                    </g>
                    <g fill="#1dbf73">
                        <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
                    </g>
                </svg>
            </a>

            {/* For PC + tablet */}
            <div className="header__action-list hide-on-mobile">
                {renderActionButtonList(buttonListData)}

                {/* If user has signed in, user dropdown btn appears */}
                {isSignedIn && (
                    <UserDropDownBtn
                        userFirstLetter={userFirstLetter}
                        onOpenUserMenu={(e) => handleOpenUserMenu(e, setAnchorElUser)}
                        onCloseUserMenu={() => handleCloseUserMenu(setAnchorElUser)}
                        onAnchorElUser={anchorElUser}
                        onSignOut={() => handleUserSignOut(setIsSignedIn, setButtonListData, navigate)}
                    />
                )}
            </div>

            {/* For mobile */}
            <Drawer open={drawer} onClose={(e) => toggleDrawer(e, false, setDrawer)}>
                <Box
                    role="presentation"
                    onClick={(e) => toggleDrawer(e, false, setDrawer)}
                    onKeyDown={(e) => toggleDrawer(e, false, setDrawer)}
                >
                    <div className="header__action-list--mobile">
                        {renderMobileMenu(
                            isSignedIn,
                            setIsSignedIn,
                            buttonListData,
                            setButtonListData,
                            USER_INFO?.name,
                            userFirstLetter,
                        )}
                    </div>
                </Box>
            </Drawer>

            {!isSignedIn && (
                <Link className="header__btn header__btn--text hide-on-pc-tablet" to="/">
                    Join
                </Link>
            )}
        </div>
    );
};

export default HeaderContent;
