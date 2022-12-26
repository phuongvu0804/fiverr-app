import { Box } from '@mui/material';
import React from 'react';
import { NavbarItemProps } from '../../types';
import Navbar from './components/Navbar';
import SocialList from './components/SocialList';

interface Props {
    data: NavbarItemProps[];
    scrollDown: boolean;
}

const Header = ({ data, scrollDown }: Props) => {
    return (
        <div
            className={scrollDown ? 'job-details__head hide-on-mobile on-scroll' : 'job-details__head  hide-on-mobile'}
        >
            <Box
                className="container-center"
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}
            >
                <Navbar data={data} />
                <SocialList />
            </Box>
        </div>
    );
};

export default Header;
