//Material UI
import { Skeleton } from '@mui/material';

//Components
import RatingStarSkeleton from '../../../RatingStar/components/RatingStarSkeleton';

const RatingSummarySkeleton = () => {
    return (
        <div className="job-details__rating">
            <RatingStarSkeleton />
            <Skeleton className="job-details__rating-count" variant="text" width={22} />
        </div>
    );
};

export default RatingSummarySkeleton;
