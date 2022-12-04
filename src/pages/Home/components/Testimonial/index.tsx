import SlickNextArrow from '@/components/SlickNextArrow';
import SlickPrevArrow from '@/components/SlickPrevArrow';
import React from 'react';
import Slider from 'react-slick';
import { TestimonialItemProps } from '../../interfaces';
import TestimonialItem from './components/TestimonialItem';

import './Testimonial.scss';
const Testimonial = ({ data }: { data: TestimonialItemProps[] }) => {
    const serviceSlicksettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
    };

    return (
        <Slider {...serviceSlicksettings} className="home__testimonial mb-l container-center">
            {data.map((item, index) => (
                <TestimonialItem key={index} data={item} />
            ))}
        </Slider>
    );
};

export default Testimonial;
