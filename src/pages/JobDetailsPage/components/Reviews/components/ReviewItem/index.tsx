import React, { useEffect, useState } from 'react';

//Components
import Image from '@/components/Image';
import RatingStar from '../../../RatingStar';

//Others
import { ReviewProps } from '@/pages/JobDetailsPage/types';
import './ReviewItem.scss';

const ReviewItem = ({ data }: { data: ReviewProps }) => {
    const [date, setDate] = useState<string>('No date');

    useEffect(() => {
        //Format date display to DD/MM/YYYY
        const handleDate = () => {
            if (data.ngayBinhLuan) {
                if (data.ngayBinhLuan.includes('-')) {
                    const replace = data.ngayBinhLuan.replaceAll('-', '/');
                    setDate(replace);
                } else {
                    setDate(data.ngayBinhLuan);
                }
            }
        };

        handleDate();
    }, []);

    return (
        <div className="job-details-review__item">
            <div className="job-details-review__user">
                <Image alt="user's photo" src={data.avatar} />
                <div className="job-details-review__user-info">
                    <p className="user-info__name">{data.tenNguoiBinhLuan}</p>
                    <p className="user-info__date">{date}</p>
                </div>
            </div>
            <div className="job-details-review__text">
                <RatingStar ratingStar={data.saoBinhLuan} />
                <p>{data.noiDung}</p>
            </div>
        </div>
    );
};

export default ReviewItem;
