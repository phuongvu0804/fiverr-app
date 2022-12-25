import { Favorite, Share } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

//Others
import './SocialList.scss';

const SocialList = () => {
    return (
        <div className="job-details-head__social-list">
            <IconButton className="job-details-head__social-item">
                <Favorite />
            </IconButton>
            <IconButton className="job-details-head__social-item">
                <Share />
            </IconButton>
        </div>
    );
};

export default SocialList;
