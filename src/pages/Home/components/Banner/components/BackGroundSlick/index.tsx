import React, { Component } from 'react';
import Slider from 'react-slick';

import './BackGroundSlick.scss';
interface BgItemType {
    name: string;
    job: string;
    className: string[];
    style?: any;
}

const BackGroundSlick = () => {
    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const bgList: BgItemType[] = [
        {
            name: 'Andrea',
            job: 'Fashion Degisner',
            className: ['home__bg-item', 'home__bg-item--andrea', 'active'],
        },
        {
            name: 'Moon',
            job: 'Fashion Degisner',
            className: ['home__bg-item', 'home__bg-item--moon'],
        },
        {
            name: 'Ritika',
            job: 'Fashion Degisner',
            className: ['home__bg-item', 'home__bg-item--ritika'],
        },
        {
            name: 'Zach',
            job: 'Fashion Degisner',
            className: ['home__bg-item', 'home__bg-item--zach'],
        },
        {
            name: 'Gabrielle',
            job: 'Fashion Degisner',
            className: ['home__bg-item', 'home__bg-item--gabrielle'],
        },
    ];

    const renderBgItem = () => {
        return bgList.map((item, index) => (
            <div key={index} className={item.className.join(' ')}>
                <div className="container-center">
                    <p className="banner__hero-name hide-on-tablet-mobile ">
                        {item.name}, <span>{item.job}</span>
                    </p>
                </div>
            </div>
        ));
    };

    return (
        <Slider {...settings} className="home__bg--slick">
            {renderBgItem()}
        </Slider>
    );
};

export default BackGroundSlick;
