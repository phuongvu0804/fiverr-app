import React, { useState } from 'react';

//Material UI
import { Box, Button } from '@mui/material';

//Components
import LoadMoreBtn from '@/components/LoadMoreBtn';
import { ReviewProps, SectionProps } from '../../types';
import RatingSummary from '../RatingSummary';
import ReviewItem from './components/ReviewItem';

//Others
import './Reviews.scss';

interface Props extends SectionProps {
    reviewList: ReviewProps[];
}

const Reviews = ({ data, reviewList }: Props) => {
    const VISIBLE_NUMBER = 5;
    const [visible, setVisible] = useState(5);

    const renderReviews = () => {
        if (reviewList.length) {
            return reviewList.slice(0, visible).map((item, key) => <ReviewItem data={item} key={key} />);
        } else {
            return <p>There is no review for this post</p>;
        }
    };

    return (
        <section id="reviews" className="job-details-content__wrapper job-details-content__wrapper—review">
            <h3 className="job-details-content__title">Reviews</h3>

            <Box sx={{ display: 'flex' }}>
                <span className="job-details-review__rating-count">{data.congViec.danhGia} reviews for this Gig</span>
                <RatingSummary ratingStar={data.congViec.saoCongViec} ratingCount={data.congViec.danhGia} />
            </Box>

            <div className="job-details-review__list">{renderReviews()}</div>

            <Button></Button>

            {visible >= VISIBLE_NUMBER && visible < reviewList.length && (
                <LoadMoreBtn className="contained-primary-btn" setVisible={setVisible} visibleNumber={VISIBLE_NUMBER}>
                    Load More
                </LoadMoreBtn>
            )}
        </section>
    );
};

export default Reviews;
