import { Skeleton } from '@mui/material';
import React from 'react';

const JobDescSkeleton = () => {
    return (
        <section id="description" className="job-details-content__wrapper">
            <h3 className="job-details-content__title">About This Gig</h3>
            <div className="job-details-about__content">
                <Skeleton
                    className="job-details-content__text"
                    variant="rounded"
                    sx={{ fontSize: '16px' }}
                    height={120}
                />
            </div>
        </section>
    );
};

export default JobDescSkeleton;
