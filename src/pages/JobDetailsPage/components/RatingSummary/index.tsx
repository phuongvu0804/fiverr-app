//Material UI
import RatingStar from '../RatingStar';

//Others
import './Rating.scss';

interface Props {
    ratingStar: number;
    ratingCount: number;
}

const RatingSummary = ({ ratingStar, ratingCount }: Props) => {
    return (
        <div className="job-details__rating">
            <RatingStar ratingStar={ratingStar} />
            <span className="job-details__rating-count">({ratingCount})</span>
        </div>
    );
};

export default RatingSummary;
