import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Material UI
import { Button, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

//Components
import LogoBtn from '@/components/LogoBtn';
import UserDropDownBtn from './components/UserDropDownBtn';

//Others
import './HeaderContent.scss';
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
import { useAppSelector } from '@/hooks';
import { LOCAL_STORAGE_USER_NAME } from '@/constants/constants';
import { UserDataProps } from '@/constants/intefaces';
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

            <LogoBtn className="header__logo" />

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
                <Link className="header__btn header__btn--text hide-on-pc-tablet" to="/auth/sign-up">
                    Join
                </Link>
            )}
        </div>
    );
};

export default HeaderContent;
