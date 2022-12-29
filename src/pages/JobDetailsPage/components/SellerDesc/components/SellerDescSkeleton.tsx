//Material UI
import { Button, Skeleton } from '@mui/material';
import RatingSummarySkeleton from '../../RatingSummary/components/RatingSummarySkeleton';

//Others
import './SellerDescSkeleton.scss';

const SellerDescSkeleton = () => {
    return (
        <section id="seller" className="job-details-content__wrapper job-details-content__wrapper—seller">
            <h3 className="job-details-content__title">About The Seller</h3>
            <div className="job-details-seller__content">
                <Skeleton className="job-details-seller__img" variant="circular" width={110} height={110} />
                <div className="job-details-seller__info">
                    <Skeleton
                        className="job-details-seller__name"
                        variant="text"
                        sx={{ fontSize: '16px' }}
                        width={110}
                    />

                    <RatingSummarySkeleton />

                    <Button variant="outlined">Contact Me</Button>
                </div>
            </div>
        </section>
    );
};

export default SellerDescSkeleton;
