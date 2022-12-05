import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Material UI
import { Button, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

//Components
import './HeaderFix.scss';
import HeaderContent from '../HeaderContent';

const HeaderFix = () => {
    return (
        <div id="header-fix" className="header">
            <HeaderContent />
        </div>
    );
};

export default HeaderFix;
