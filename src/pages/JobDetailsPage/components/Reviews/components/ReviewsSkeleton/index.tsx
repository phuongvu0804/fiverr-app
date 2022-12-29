import { Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import ReviewItemSkeleton from '../ReviewItemSkeleton';

import './ReviewsSkeleton.scss';

const ReviewsSkeleton = () => {
    const renderReviews = () => {
        const array = Array.apply(null, Array(5));

        return array.map((item, index) => <ReviewItemSkeleton key={index} />);
    };

    return (
        <section id="reviews" className="job-details-content__wrapper job-details-content__wrapper—review">
            <h3 className="job-details-content__title">Reviews</h3>

            <Box sx={{ display: 'flex' }}>
                <Skeleton
                    className="job-details-review__rating-count"
                    variant="text"
                    sx={{ fontSize: '16px', marginBottom: 1 }}
                    width={200}
                    height={30}
                />
            </Box>

            <div className="job-details-review__list">{renderReviews()}</div>
        </section>
    );
};

export default ReviewsSkeleton;
