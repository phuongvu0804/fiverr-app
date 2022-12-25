import { AccessTime, Autorenew, Favorite, NavigateNext, Share, Star } from '@mui/icons-material';
import RatingStar from '../RatingStar';

//Others
import './Rating.scss';

const RatingSummary = () => {
    return (
        <div className="job-details__rating">
            <RatingStar />
            <span className="job-details__rating-count">(11)</span>
        </div>
    );
};

export default RatingSummary;
