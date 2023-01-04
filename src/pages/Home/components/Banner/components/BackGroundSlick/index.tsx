import Slider from 'react-slick';

//Others
import './BackGroundSlick.scss';
import { BgItemType } from '@/pages/Home/interfaces';

const BackGroundSlick = ({ data }: { data: BgItemType[] }) => {
    const SETTINGS = {
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

    const renderBgItem = () => {
        return data.map((item, index) => (
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
        <Slider {...SETTINGS} className="home__bg--slick">
            {renderBgItem()}
        </Slider>
    );
};

export default BackGroundSlick;
