import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';

interface Props {
    userFirstLetter: string;
    onOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    onCloseUserMenu: () => void;
    onAnchorElUser: HTMLElement | null;
    onSignOut: () => void;
}

const UserDropDownBtn = ({ userFirstLetter, onOpenUserMenu, onCloseUserMenu, onAnchorElUser, onSignOut }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="header__action-list">
            <IconButton onClick={onOpenUserMenu}>
                <Avatar className="header__btn--user">{userFirstLetter}</Avatar>
            </IconButton>
            <Menu
                className="user__menu-list"
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={onAnchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(onAnchorElUser)}
                onClose={onCloseUserMenu}
            >
                <MenuItem onClick={onCloseUserMenu}>
                    <Button
                        className="user__menu-item"
                        onClick={() => {
                            onCloseUserMenu();
                            navigate('/profile');
                        }}
                    >
                        Your Profile
                    </Button>
                </MenuItem>
                <MenuItem onClick={onCloseUserMenu}>
                    <Button
                        className="user__menu-item"
                        onClick={() => {
                            onSignOut();
                            onCloseUserMenu();
                        }}
                    >
                        Sign Out
                    </Button>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default UserDropDownBtn;
