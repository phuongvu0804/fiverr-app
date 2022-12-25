import { Star } from '@mui/icons-material';
import React from 'react';

//Others
import './RatingStar.scss';

const RatingStar = () => {
    return (
        <div className="job-details__rating-star">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />

            <span className="job-details__rating-star-number">5</span>
        </div>
    );
};

export default RatingStar;
