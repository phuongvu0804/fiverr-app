//Material UI
import { AccessTime, Autorenew } from '@mui/icons-material';
import { Button } from '@mui/material';

//Others
import './BookingCard.scss';

interface Props {
    className?: string;
    scrollDown?: boolean;
}

const BookingCard = ({ className, scrollDown }: Props) => {
    //Html tag - div for PC, - section for tablet + mobile
    const HtmlTag = className === 'hide-on-tablet-mobile' ? 'div' : 'section';

    return (
        <HtmlTag
            id="price"
            className={scrollDown ? `job-details__booking ${className} on-scroll` : `job-details__booking ${className}`}
        >
            <p className="job-details-booking__price">€14.85</p>
            <p className="job-details-booking__desc">
                <p>I will spend 1 hour on your task as a Virtual Assistant</p>
            </p>
            <div className="job-details-booking__add-info-list">
                <div className="job-details-booking__add-info-item">
                    <AccessTime />
                    <span>2 Days Delivery</span>
                </div>

                <div className="job-details-booking__add-info-item">
                    <Autorenew />
                    <span>7 Revisions</span>
                </div>
            </div>
            <div className="job-details-booking__hour">
                <span>Hours of work</span>
                <input type="number" />
            </div>
            <Button variant="contained" className="job-details-booking__btn">
                Continue (€14.85)
            </Button>
        </HtmlTag>
    );
};

export default BookingCard;
