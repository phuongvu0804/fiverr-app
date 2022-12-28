import React, { useEffect, useState } from 'react';

//Material UI

//Components
import BookingCard from './components/BookingCard';
import MUIBreadCrumbs from './components/MUIBreadCrumbs';

//Others
import { initPostData, initReviewData, navbarList } from './constants';

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

const JobDetailsPage = () => {
    const { id } = useParams();

    const [data, setData] = useState<PostProps>(initPostData);
    const [reviews, setReviews] = useState<ReviewProps[]>(initReviewData);
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [navBarData, setNavbarData] = useState<NavbarItemProps[]>(navbarList);
    const [loading, setLoading] = useState<boolean>(false);
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

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

    //Get liked posts from local storage
    useEffect(() => {
        const likedPostsData = localStorage.getItem('fiverLikedPosts');
        if (likedPostsData) {
            const parsedLikedPostsData = JSON.parse(likedPostsData);
            parsedLikedPostsData && setLikedPosts(parsedLikedPostsData!);
        }
    }, []);

    return (
        <div id="job-details-page" className="padding-top-page">
            <Header likedPosts={likedPosts} postId={data.id} data={navBarData} scrollDown={scrollDown} />

            <MUIBreadCrumbs data={data} />

            <div className="container-center">
                <div className="job-details__body">
                    <div className="job-details__content">
                        {/* Job details */}
                        <Overview data={data} />

                        <BookingCard data={data} className="display-tablet-mobile hide-on-pc" />

                        <JobDesc data={data.congViec.moTa} />

                        <SellerDesc data={data} />

                        <Reviews data={data} reviewList={reviews} />
                    </div>

                    <BookingCard data={data} className="hide-on-tablet-mobile" scrollDown={scrollDown} />
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
