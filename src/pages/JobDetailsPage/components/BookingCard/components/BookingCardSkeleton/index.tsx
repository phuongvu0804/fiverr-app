//Material UI
import { AccessTime, Autorenew } from '@mui/icons-material';
import { Button, Skeleton } from '@mui/material';

const BookingCardSkeleton = ({ className }: { className: string }) => {
    return (
        <section id="price" className={`job-details__booking ${className}`}>
            <Skeleton
                className="job-details-booking__price"
                variant="text"
                sx={{ fontSize: '30px', margin: '0px auto' }}
                width={150}
            />

            <div className="job-details-booking__desc">
                <Skeleton variant="text" sx={{ fontSize: '14px' }} width={150} />
            </div>

            <div className="job-details-booking__add-info-list">
                <div className="job-details-booking__add-info-item">
                    <AccessTime />
                    <Skeleton variant="text" sx={{ fontSize: '14px' }} width={100} />
                </div>

                <div className="job-details-booking__add-info-item">
                    <Autorenew />
                    <Skeleton variant="text" sx={{ fontSize: '14px' }} width={100} />
                </div>
            </div>

            <div className="job-details-booking__hour">
                <span>Hours of work</span>
                <input type="number" min="1" />
            </div>

            <Button variant="contained" className="contained-primary-btn">
                Continue
            </Button>
        </section>
    );
};

export default BookingCardSkeleton;
