import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Material UI
import MUIAlert from '@/components/MUIAlert';

//Components
import BookingCard from './components/BookingCard';
import MUIBreadCrumbs from './components/MUIBreadCrumbs';
import Overview from './components/Overview';
import JobDesc from './components/JobDesc';
import SellerDesc from './components/SellerDesc';
import Reviews from './components/Reviews';
import Header from './components/Header';
import JobDetailsPageSkeleton from './components/JobDetailsPageSkeleton';

//Others
import { INIT_POST_DATA, INIT_REVIEW_DATA, NAVBAR_LIST } from './constants';
import './JobDetailsPage.scss';
import { NavbarItemProps, ReviewProps } from './types';
import { jobApi } from '@/api';
import reviewApi from '@/api/reviewApi';
import { useAppSelector } from '@/hooks';
import { callApi } from '@/configs/api/errorHandling';
import { LogErrorProps, PostProps } from '@/constants/intefaces';
import useLogError from '@/hooks/useLogError';

const JobDetailsPage = () => {
    let timeOutId;
    const { id } = useParams();
    const logError = useLogError();
    const openAlert = useAppSelector((state) => state.alert.data);

    const [data, setData] = useState<PostProps>(INIT_POST_DATA);
    const [reviews, setReviews] = useState<ReviewProps[]>(INIT_REVIEW_DATA);
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [navBarData, setNavbarData] = useState<NavbarItemProps[]>(NAVBAR_LIST);
    const [loading, setLoading] = useState<boolean>(false);
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const handleError = (error: LogErrorProps) => {
        setLoading(false);
        logError(error);
    };

    //Listen to the scrolling event
    useEffect(() => {
        let OFFSET_Y = 0;
        const onScroll = () => {
            OFFSET_Y = window.pageYOffset;

            OFFSET_Y > 0 ? setScrollDown(true) : setScrollDown(false);
        };

        window.addEventListener('scroll', onScroll);
    }, []);

    //Listen to the screen resizing event
    useEffect(() => {
        const onResize = () => {
            const SCREEN_WIDTH = window.innerWidth;
            let navbarListFiltered = [...NAVBAR_LIST];

            if (SCREEN_WIDTH > 1024) {
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

    //Fetch Job Details
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        if (id) {
            callApi(
                jobApi.getJobDetails(id),
                (result: any) => {
                    setLoading(false);
                    setData(result[0]);
                },
                (error: LogErrorProps) => {
                    handleError(error);
                },
            );
        }

        return () => {
            controller.abort();
        };
    }, []);

    //Fetch Job Reviews
    useEffect(() => {
        const controller = new AbortController();

        if (id) {
            callApi(
                reviewApi.getReviewsbyJob(id),
                (result: any) => {
                    setLoading(false);
                    setReviews(result);
                },
                (error: LogErrorProps) => {
                    handleError(error);
                },
            );
        }

        return () => {
            controller.abort();
        };
    }, []);

    //Get liked posts from local storage
    useEffect(() => {
        const likedPostsData = localStorage.getItem('fiverLikedPosts');
        if (likedPostsData) {
            const parsedLikedPostsData = JSON.parse(likedPostsData);
            parsedLikedPostsData && setLikedPosts(parsedLikedPostsData!);
        }
    }, []);

    return !loading ? (
        //Page's content
        <div id="job-details-page" className="padding-top-page">
            <Header likedPosts={likedPosts} postId={data.id} data={navBarData} scrollDown={scrollDown} />

            <MUIBreadCrumbs data={data} />

            <div className="container-center">
                <div className="job-details__body">
                    <div className="job-details__content">
                        {/* Job details */}
                        <Overview data={data} />

                        <BookingCard timeOutId={timeOutId} data={data} className="display-tablet-mobile hide-on-pc" />

                        <JobDesc data={data.congViec.moTa} />

                        <SellerDesc data={data} />

                        <Reviews data={data} reviewList={reviews} />
                    </div>

                    <BookingCard
                        timeOutId={timeOutId}
                        data={data}
                        className="hide-on-tablet-mobile"
                        scrollDown={scrollDown}
                    />
                </div>
            </div>

            <MUIAlert openAlert={openAlert} timeOutId={timeOutId} />
        </div>
    ) : (
        //Page's skeleton
        <JobDetailsPageSkeleton likedPosts={likedPosts} data={navBarData} scrollDown={scrollDown} />
    );
};

export default JobDetailsPage;
