import Image from '@/components/Image';
import { Button, Skeleton } from '@mui/material';
import React from 'react';
import { LearnCardDataProps } from '../../types';

//Others
import './LearnCard.scss';
interface Props {
    data: LearnCardDataProps;
    loading: boolean;
}
const LearnCard = ({ data, loading }: Props) => {
    return loading ? (
        <section className="profile__info-card profile__learn-card">
            <Skeleton className="learn-card__logo" variant="rounded" width={86} height={32} />
            <Skeleton className="learn-card__img" variant="rounded" width={338} height={96} />

            <Skeleton variant="text" sx={{ fontSize: '20px', margin: '0 auto' }} width={200} />
            <Skeleton variant="text" sx={{ fontSize: '16px', margin: '0 auto 10px' }} width={200} />

            <Button className="contained-primary-btn">Enroll Now</Button>
        </section>
    ) : (
        <section className="profile__info-card profile__learn-card">
            <Image
                className="learn-card__logo"
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
                alt="Learn's logo"
            />
            <Image className="learn-card__img" src={data.illustration} alt="Learn's illustration" />

            <h4>{data.title}</h4>
            <p>{data.desc}</p>
            <Button className="contained-primary-btn">Enroll Now</Button>
        </section>
    );
};

export default LearnCard;
