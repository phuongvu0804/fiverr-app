import { Star } from '@mui/icons-material';

//Others
import './RatingStar.scss';

interface Props {
    ratingStar: number;
}

const RatingStar = ({ ratingStar }: Props) => {
    const renderStars = () => {
        const array = Array.apply(null, Array(ratingStar));

        return array.map((item, index) => <Star key={index} />);
    };

    return (
        <div className="job-details__rating-star">
            {renderStars()}
            <span className="job-details__rating-star-number">{ratingStar}</span>
        </div>
    );
};

export default RatingStar;
