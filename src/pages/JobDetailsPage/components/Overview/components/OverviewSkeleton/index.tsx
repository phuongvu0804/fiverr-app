import { Skeleton } from '@mui/material';

import './OverviewSkeleton.scss';

const OverviewSkeleton = () => {
    return (
        <section id="overview" className="job-details-content__wrapper">
            <Skeleton className="job-details__title" variant="text" />

            <div className="job-details__seller-overview">
                <Skeleton variant="circular" width={30} height={30} />

                <Skeleton variant="text" sx={{ fontSize: '14px', marginLeft: 1 }} width={200} />
            </div>
            <div className="job-details__img">
                <Skeleton variant="rounded" height={500} sx={{ marginTop: '30px' }} />
            </div>
        </section>
    );
};

export default OverviewSkeleton;
