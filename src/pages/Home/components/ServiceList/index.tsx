//Components
import ServiceListSlick from './components/ServiceListSlick';

//Others
import { ServiceProps } from '../../interfaces';
import './ServiceList.scss';

const ServiceList = ({ data }: { data: ServiceProps[] }) => {
    return (
        <div className="home__service-list container-center mb-l">
            <h3 className="sub-title__md">Popular professional services</h3>
            <div className="service-list__wrapper">
                <ServiceListSlick data={data} />
            </div>
        </div>
    );
};

export default ServiceList;
