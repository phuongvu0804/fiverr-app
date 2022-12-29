//Material UI
import { Skeleton } from '@mui/material';

const ReviewItemSkeleton = () => {
    return (
        <div className="job-details-review__item">
            <div className="job-details-review__user">
                <Skeleton variant="circular" sx={{ marginRight: '16px' }} width={48} height={48} />

                <div className="job-details-review__user-info">
                    <Skeleton className="user-info__name" variant="text" sx={{ fontSize: '16px' }} width={100} />
                    <Skeleton className="user-info__date" variant="text" sx={{ fontSize: '14px' }} width={100} />
                </div>
            </div>
            <div className="job-details-review__text">
                <Skeleton variant="rounded" sx={{ fontSize: '16px' }} height={50} />
            </div>
        </div>
    );
};

export default ReviewItemSkeleton;
