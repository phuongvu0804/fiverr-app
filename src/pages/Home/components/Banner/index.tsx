import React from 'react';

import './Banner.scss';
const Banner = () => {
    return (
        <div className="home__banner">
            <h2 className="banner__title">
                Find the perfect
                <span> freelance </span>
                services for your business
            </h2>
            <input type="text" className="banner__search" />
            <img src="" alt="" className="banner__img" />
        </div>
    );
};

export default Banner;
