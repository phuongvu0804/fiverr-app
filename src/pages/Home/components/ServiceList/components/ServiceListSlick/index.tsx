import Slider from 'react-slick';

//Others
import './ServiceListSlick.scss';
import { ServiceProps } from '@/pages/Home/interfaces';
import { serviceSlicksettings } from '../../constants';

const ServiceListSlick = ({ data }: { data: ServiceProps[] }) => {
    const renderServiceItem = () => {
        return data.map((item, index) => {
            return (
                <div key={index} className="service-list__item-wrapper">
                    <div className="service-list__item">
                        <img src={item.img} />
                        <div className="service-list__item-content">
                            <h5 className="service-list__item-desc">{item.slogan}</h5>
                            <h3 className="service-list__item-title">{item.slogan}</h3>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return <Slider {...serviceSlicksettings}>{renderServiceItem()}</Slider>;
};

export default ServiceListSlick;
