import Slider from 'react-slick';

//Components
import SlickNextArrow from '@/components/SlickNextArrow';
import SlickPrevArrow from '@/components/SlickPrevArrow';
import TestimonialItem from './components/TestimonialItem';

//Others
import { TestimonialItemProps } from '../../interfaces';

import './Testimonial.scss';
const Testimonial = ({ data }: { data: TestimonialItemProps[] }) => {
    const SERVICE_SLICK_SETTINGS = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
    };

    return (
        <Slider {...SERVICE_SLICK_SETTINGS} className="home__testimonial mb-l container-center">
            {data.map((item, index) => (
                <TestimonialItem key={index} data={item} />
            ))}
        </Slider>
    );
};

export default Testimonial;
