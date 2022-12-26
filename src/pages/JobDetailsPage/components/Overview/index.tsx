import RatingSummary from '../RatingSummary';

//Components
import Image from '@/components/Image';

//Others
import './Overview.scss';
import { SectionProps } from '../../types';

const Overview = ({ data }: SectionProps) => {
    return (
        <section id="overview" className="job-details-content__wrapper">
            <h2 className="job-details__title">{data.congViec.tenCongViec}</h2>
            <div className="job-details__seller-overview">
                <Image src={data.avatar} alt={`${data.tenNguoiTao}'s image`} />
                <span>{data.tenNguoiTao}</span>
                <RatingSummary ratingStar={data.congViec.saoCongViec} ratingCount={data.congViec.danhGia} />
            </div>
            <div className="job-details__img">
                <Image src={data.congViec.hinhAnh} alt="job illustration" />
            </div>
        </section>
    );
};

export default Overview;
