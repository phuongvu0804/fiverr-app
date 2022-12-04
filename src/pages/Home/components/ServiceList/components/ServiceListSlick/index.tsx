import Slider from 'react-slick';

//Others
import './ServiceListSlick.scss';
import { ServiceProps } from '@/pages/Home/interfaces';
import { serviceSlicksettings } from '../../constants';
import ServiceItem from '../ServiceItem';

const ServiceListSlick = ({ data }: { data: ServiceProps[] }) => {
    const renderServiceItem = () => {
        return data.map((item, index) => {
            return <ServiceItem key={index} data={item} />;
        });
    };

    return <Slider {...serviceSlicksettings}>{renderServiceItem()}</Slider>;
};

export default ServiceListSlick;
