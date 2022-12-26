import React, { useEffect, useState } from 'react';

//Material UI

//Components
import BookingCard from './components/BookingCard';
import MUIBreadCrumbs from './components/MUIBreadCrumbs';

//Others
import { navbarList } from './constants';

//Others
import './JobDetailsPage.scss';
import { NavbarItemProps, ReviewProps } from './types';
import { PostProps } from '@/pages/JobListPage/types';
import { jobApi } from '@/api';
import { useParams } from 'react-router-dom';
import Overview from './components/Overview';
import JobDesc from './components/JobDesc';
import SellerDesc from './components/SellerDesc';
import Reviews from './components/Reviews';
import Header from './components/Header';
import reviewApi from '@/api/reviewApi';

const initPostData = {
    avatar: '',
    congViec: {
        danhGia: 0,
        giaTien: -1,
        hinhAnh: '',
        id: -1,
        maChiTietLoaiCongViec: -1,
        moTa: '',
        moTaNgan: '',
        nguoiTao: -1,
        saoCongViec: 0,
        tenCongViec: '',
    },
    id: 0,
    tenChiTietLoai: '',
    tenLoaiCongViec: '',
    tenNguoiTao: '',
    tenNhomChiTietLoai: '',
};

const JobDetailsPage = () => {
    const { id } = useParams();

    const [data, setData] = useState<PostProps>(initPostData);
    const [reviews, setReviews] = useState<ReviewProps[]>([
        {
            avatar: '',
            ngayBinhLuan: '',
            noiDung: '',
            saoBinhLuan: 0,
            tenNguoiBinhLuan: '',
        },
    ]);
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [navBarData, setNavbarData] = useState<NavbarItemProps[]>(navbarList);
    const [loading, setLoading] = useState<boolean>(false);

    //Listen to the scrolling event
    useEffect(() => {
        let offsetY = 0;
        const onScroll = () => {
            offsetY = window.pageYOffset;

            offsetY > 0 ? setScrollDown(true) : setScrollDown(false);
        };

        window.addEventListener('scroll', onScroll);
    }, []);

    //Listen to the screen resizing event
    useEffect(() => {
        const onResize = () => {
            const screenWidth = window.innerWidth;
            let navbarListFiltered = [...navbarList];

            if (screenWidth > 1024) {
                //For PC: remove item Price off the NavBar List
                navbarListFiltered = navbarListFiltered.filter((item) => {
                    return item.name.toLowerCase() !== 'price';
                });
            }

            setNavbarData(navbarListFiltered);
        };

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onResize);
        };
    }, []);

    //Fetch Job Details' data
    useEffect(() => {
        const controller = new AbortController();

        const fetchJobDetails = async (jobId: string) => {
            setLoading(false);
            const result = await jobApi.getJobDetails(jobId);
            try {
                setLoading(true);
                setData(result.data.content[0]);
            } catch (error) {
                setLoading(true);
                console.log(error);
            }
        };

        const fetchJobReviews = async (jobId: string) => {
            setLoading(false);
            const result = await reviewApi.getReviewsbyJob(jobId);
            try {
                setLoading(true);
                console.log('reviews', result.data.content);
                setReviews(result.data.content);
            } catch (error) {
                setLoading(true);
                console.log(error);
            }
        };

        if (id) {
            fetchJobDetails(id);
            fetchJobReviews(id);
        }

        return () => {
            controller.abort();
        };
    }, []);

    //Fetch reviews
    useEffect(() => {}, []);

    return (
        <div id="job-details-page" className="padding-top-page">
            <Header data={navBarData} scrollDown={scrollDown} />

            <MUIBreadCrumbs data={data} />

            <div className="container-center">
                <div className="job-details__body">
                    <div className="job-details__content">
                        {/* Job details */}
                        <Overview data={data} />

                        <BookingCard
                            // price={data.congViec.giaTien}
                            // jobDesc={data.congViec.moTaNgan}
                            data={data}
                            className="display-tablet-mobile hide-on-pc"
                        />

                        <JobDesc data={data.congViec.moTa} />

                        <SellerDesc data={data} />

                        <Reviews data={data} reviewList={reviews} />
                    </div>

                    <BookingCard
                        // price={data.congViec.giaTien}
                        // jobDesc={data.congViec.moTaNgan}
                        data={data}
                        className="hide-on-tablet-mobile"
                        scrollDown={scrollDown}
                    />
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
