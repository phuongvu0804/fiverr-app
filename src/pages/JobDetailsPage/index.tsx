import React, { useEffect, useState } from 'react';

//Material UI
import { AccessTime, Autorenew, Favorite, NavigateNext, Share, Star } from '@mui/icons-material';
import { Breadcrumbs, Button, IconButton, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

//Components
import BookingCard from './components/BookingCard';
import MUIBreadCrumbs from './components/MUIBreadCrumbs';
import Navbar from './components/Navbar';
import RatingSummary from './components/RatingSummary';
import ReviewItem from './components/ReviewItem';
import SocialList from './components/SocialList';

//Others
import { navbarList } from './constants';
import Image from '@/components/Image';

//Others
import './JobDetailsPage.scss';
import { NavbarItemProps } from './types';

const JobDetailsPage = () => {
    const [scrollDown, setScrollDown] = useState<boolean>(false);
    const [navBarData, setNavbarData] = useState<NavbarItemProps[]>(navbarList);

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

    return (
        <div id="job-details-page" className="padding-top-page">
            {/* Navigation for Job Details Page */}
            <div
                className={
                    scrollDown ? 'job-details__head hide-on-mobile on-scroll' : 'job-details__head  hide-on-mobile'
                }
            >
                <Box
                    className="container-center"
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}
                >
                    <Navbar data={navBarData} />
                    <SocialList />
                </Box>
            </div>

            <div className="container-center">
                <MUIBreadCrumbs />
            </div>

            <div className="container-center">
                <div className="job-details__body">
                    {/* Job details */}
                    <div className="job-details__content">
                        <section id="overview" className="job-details-content__wrapper">
                            <h2 className="job-details__title">
                                I will be your administrative virtual assistant for data entry and web research
                            </h2>
                            <div className="job-details__seller-overview">
                                <Image
                                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f0682900a8c24bb7eec11a92b3eafab9-1665391489527/37af70cc-a58a-486f-9749-b1e2eea5aa3d.jpg"
                                    alt="Seller image"
                                />
                                <span>akansha_yadav</span>
                                <RatingSummary />
                            </div>
                            <div className="job-details__img">
                                <Image
                                    src="https://fiverr-res.cloudinary.com/videos/so_54.802259,t_thumbnail3_3/qt8lh4qkjizgea4ksepx/administrative-virtual-assistant-data-entry-web-research-mining-scraping.png"
                                    alt="job illustration"
                                />
                            </div>
                        </section>

                        <BookingCard className="display-tablet-mobile hide-on-pc" />

                        <section id="description" className="job-details-content__wrapper">
                            <h3 className="job-details-content__title">About This Gig</h3>
                            <div className="job-details-about__content">
                                <span className="job-details-content__text">
                                    Welcome to my Gig! Are you looking for a reliable Virtual Assistant? Then, you are
                                    at the very right place, I will be your reliable Virtual Assistant :)
                                </span>

                                <br />

                                <span className="job-details-content__text--bold">About Me:</span>
                                <span className="job-details-content__text">
                                    My name is Akansha and I have 6+ years of experience as a virtual assistant. Over
                                    the years I became an expert in Data Entry, Web Research, Administrative tasks, Data
                                    Scraping, lead generation, etc.
                                </span>
                            </div>
                        </section>

                        <section
                            id="seller"
                            className="job-details-content__wrapper job-details-content__wrapper—seller"
                        >
                            <h3 className="job-details-content__title">About The Seller</h3>
                            <div className="job-details-seller__content">
                                <Image
                                    alt="seller photo"
                                    className="job-details-seller__img"
                                    src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f0682900a8c24bb7eec11a92b3eafab9-1665391489527/37af70cc-a58a-486f-9749-b1e2eea5aa3d.jpg"
                                />
                                <div className="job-details-seller__info">
                                    <p>akansha_yadav</p>

                                    <RatingSummary />

                                    <Button variant="outlined">Contact Me</Button>
                                </div>
                            </div>
                        </section>

                        <section
                            id="reviews"
                            className="job-details-content__wrapper job-details-content__wrapper—review"
                        >
                            <h3 className="job-details-content__title">Reviews</h3>

                            <Box sx={{ display: 'flex' }}>
                                <span className="job-details-review__rating-count">11 reviews for this Gig</span>
                                <RatingSummary />
                            </Box>
                            <div className="job-details-review__list">
                                <ReviewItem />
                                <ReviewItem />
                                <ReviewItem />
                            </div>
                        </section>
                    </div>

                    <BookingCard className="hide-on-tablet-mobile" scrollDown={scrollDown} />
                </div>
            </div>
        </div>
    );
};

export default JobDetailsPage;
