import { Favorite, Star } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <Link className="job-list__item-head" to={`/job-details/${data.id}`}>
                    <img src={data.congViec.hinhAnh} alt={data.congViec.tenCongViec} className="job-list__item-img" />
                </Link>
                <div className="job-list__item-body">
                    <div className="item-body__user">
                        <div className="item-body__user-img">
                            <img src={data.avatar} alt="user's avatar" />
                        </div>
                        <p className="item-body__user-name">{data.tenNguoiTao}</p>
                    </div>

                    <Link className="item-body__desc" to={`/job-details/${data.id}`}>
                        {data.congViec.moTaNgan}
                    </Link>

                    <div className="item-body__rating">
                        <Star className="item-content__rating-star" />
                        {data.congViec.saoCongViec}
                        <span className="item-content__rating-number">({data.congViec.danhGia})</span>
                    </div>
                </div>
                <div className="job-list__item-footer">
                    <IconButton>
                        <Favorite className="item-footer__like" />
                    </IconButton>
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
