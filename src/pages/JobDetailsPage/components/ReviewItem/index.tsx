import Image from '@/components/Image';
import React from 'react';
import RatingStar from '../RatingStar';
import Rating from '../RatingSummary';

//Others
import './ReviewItem.scss';

const ReviewItem = () => {
    return (
        <div className="job-details-review__item">
            <div className="job-details-review__user">
                <Image
                    alt="user's photo"
                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5ebae2f389dc15a4683388608c82cf94-25764421668047389.7116652/BD687C68-958F-4D24-B3F9-C037A99B7EB6"
                />
                <div className="job-details-review__user-info">
                    <p className="user-info__name">sbajaio</p>
                    <p className="user-info__country">Germany</p>
                </div>
            </div>
            <div className="job-details-review__text">
                <RatingStar />
                <p>
                    Akansha is awesome. She is honest, upfront, communicative. effective and delivers quality work.
                    Couldn't ask for more. Amazing work will definitely work together again soon!
                </p>
            </div>
        </div>
    );
};

export default ReviewItem;
