import { Button } from '@mui/material';
import React from 'react';
import GigCard from './components/GigCard';
import NoContentCard from './components/NoContentCard';

//Others
import './Gig.scss';
const Gig = ({ data }: any) => {
    const renderGigContent = () => {
        if (data) {
            return <GigCard />;
        } else {
            return <NoContentCard />;
        }
    };
    return <div className="profile__gig">{renderGigContent()}</div>;
};

export default Gig;
