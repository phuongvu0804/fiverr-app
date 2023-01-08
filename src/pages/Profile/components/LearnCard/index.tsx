import { Button } from '@mui/material';
import React from 'react';

//Others
import './LearnCard.scss';
const LearnCard = () => {
    return (
        <section className="profile__info-card profile__learn-card">
            <img
                src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
                alt=""
                className="learn-card__logo"
            />
            <img
                src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg"
                alt=""
                className="learn-card__img"
            />
            <h4>Earn badges and stand out</h4>
            <p>Boost your sales, by boosting your expertise.</p>
            <Button className="contained-primary-btn">Enroll Now</Button>
        </section>
    );
};

export default LearnCard;
