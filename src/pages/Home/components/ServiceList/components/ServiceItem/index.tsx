import { ServiceProps } from '@/pages/Home/interfaces';

const ServiceItem = ({ data }: { data: ServiceProps }) => {
    return (
        <div className="service-list__item-wrapper">
            <div className="service-list__item">
                <img src={data.img} />
                <div className="service-list__item-content">
                    <h5 className="service-list__item-desc">{data.slogan}</h5>
                    <h3 className="service-list__item-title">{data.slogan}</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
