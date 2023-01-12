import { Link, useNavigate } from 'react-router-dom';

//Material UI
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

//Others
import { handleUserSignOut, renderActionButtonList } from '../../constants';

const SideBarMobile = ({ userFirstLetter, userName, buttonListData, setIsSignedIn, setButtonListData }: any) => {
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <Box
                className="sidebar__head"
                sx={{ display: 'flex', alignItems: 'center', mb: 2, textDecoration: 'none' }}
                component={Link}
                to="/profile"
            >
                <Avatar className="header__btn--user">{userFirstLetter}</Avatar>
                <Typography ml={2} sx={{ fontSize: '16px', fontWeight: '600', color: '#404145' }}>
                    {userName}
                </Typography>
            </Box>
            <Button className="header__btn header__btn--text" component={Link} to="/profile">
                Your Profile
            </Button>
            {renderActionButtonList(buttonListData)}
            <Button
                className="header__btn header__btn--text"
                onClick={() => handleUserSignOut(setIsSignedIn, setButtonListData, navigate)}
            >
                Sign Out
            </Button>
        </div>
    );
};

export default SideBarMobile;
