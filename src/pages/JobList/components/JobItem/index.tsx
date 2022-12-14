import { Favorite, Star } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { PostProps } from '../../types';

//Others
import './JobItem.scss';

interface Props {
    data: PostProps;
}

const JobItem = ({ data }: Props) => {
    return (
        <>
            <Grid item xs={12} sm={6} md={3} className="job-list__item">
                <div className="job-list__item-head">
                    <img src={data.congViec.hinhAnh} alt={data.congViec.tenCongViec} className="job-list__item-img" />
                </div>
                <div className="job-list__item-body">
                    <div className="item-body__user">
                        <div className="item-body__user-img">
                            <img src={data.avatar} alt="user's avatar" />
                        </div>
                        <p className="item-body__user-name">{data.tenNguoiTao}</p>
                    </div>

                    <p className="item-body__desc">{data.congViec.moTaNgan}</p>

                    <div className="item-body__rating">
                        <Star className="item-content__rating-star" />
                        {data.congViec.saoCongViec}
                        <span className="item-content__rating-number">({data.congViec.danhGia})</span>
                    </div>
                </div>
                <div className="job-list__item-footer">
                    <Favorite className="item-footer__like" />
                    <span className="item-footer__salary">
                        STARTING AT
                        <span className="item-footer__salary-number">
                            {data.congViec.giaTien}
                            <sup className="item-footer__salary-number-decimal">€</sup>
                        </span>
                    </span>
                </div>
            </Grid>
        </>
    );
};

export default JobItem;
