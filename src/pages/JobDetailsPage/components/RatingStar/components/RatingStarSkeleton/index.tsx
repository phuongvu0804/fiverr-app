import { Skeleton } from '@mui/material';
import React from 'react';

const RatingStarSkeleton = () => {
    const renderStars = () => {
        const ARRAY = Array.apply(null, Array(5));

        return ARRAY.map((item, index) => (
            <Skeleton key={index} variant="rounded" width={15} height={15} sx={{ marginRight: 1 }} />
        ));
    };

    return (
        <div className="job-details__rating-star">
            {renderStars()}
            <Skeleton className="job-details__rating-star-number" variant="text" width={22} />
        </div>
    );
};

export default RatingStarSkeleton;
