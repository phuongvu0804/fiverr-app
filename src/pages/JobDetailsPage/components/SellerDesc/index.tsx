//Components
import RatingSummary from '../RatingSummary';
import Image from '@/components/Image';

//Material UI
import { Button } from '@mui/material';

//Others
import { SectionProps } from '../../types';
import './SellerDesc.scss';

const SellerDesc = ({ data }: SectionProps) => {
    return (
        <section id="seller" className="job-details-content__wrapper job-details-content__wrapper—seller">
            <h3 className="job-details-content__title">About The Seller</h3>
            <div className="job-details-seller__content">
                <Image alt={`${data.tenNguoiTao}'s image`} className="job-details-seller__img" src={data.avatar} />
                <div className="job-details-seller__info">
                    <p>{data.tenNguoiTao}</p>

                    <RatingSummary ratingStar={data.congViec.saoCongViec} ratingCount={data.congViec.danhGia} />

                    <Button variant="outlined">Contact Me</Button>
                </div>
            </div>
        </section>
    );
};

export default SellerDesc;
