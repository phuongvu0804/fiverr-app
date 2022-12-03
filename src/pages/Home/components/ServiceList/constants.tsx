//Components
import ServiceListNextArrow from './components/ServiceListNextArrow';
import ServiceListPrevArrow from './components/ServiceListPrevArrow';

export const serviceSlicksettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <ServiceListNextArrow />,
    prevArrow: <ServiceListPrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 739,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20%',
            },
        },
    ],
};
