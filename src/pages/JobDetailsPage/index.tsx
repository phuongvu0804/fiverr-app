import Image from '@/components/Image';
import { AccessTime, Autorenew, Favorite, Share, Star } from '@mui/icons-material';
import { Button, IconButton, TextField } from '@mui/material';
import React from 'react';

//Others
import './JobDetailsPage.scss';

const JobDetailsPage = () => {
    return (
        <div id="job-details-page" className="padding-top-page">
            {/* Navigation for Job Details Page */}
            <div className="job-details__head">
                <div className="job-details-head__nav-list">
                    <a href="" className="job-details-head__nav-item">
                        Overview
                    </a>
                </div>
                <div className="job-details-head__social-list">
                    <IconButton className="job-details-head__social-item">
                        <Favorite />
                    </IconButton>
                    <IconButton className="job-details-head__social-item">
                        <Share />
                    </IconButton>
                </div>
            </div>

            {/* Booking card */}
            <div className="job-details__booking">
                <p className="job-details-booking__price">€14.85</p>
                <div className="job-details-booking__add-info-list">
                    <div className="job-details-booking__add-info-item">
                        <AccessTime />
                        <span>2 Days Delivery</span>
                    </div>

                    <div className="job-details-booking__add-info-item">
                        <Autorenew />
                        <span>7 Revisions</span>
                    </div>
                </div>
                <div className="job-details-booking__hour">
                    <span>Hours of work</span>
                    <TextField type="number" />
                </div>
                <button className="job-details-booking__btn"></button>
                <Button variant="contained">Continue (€14.85)</Button>
            </div>

            {/* Content */}
            <div className="job-details__content">
                <section className="job-details-content__wrapper">
                    <h2 className="job-details__title">
                        I will be your administrative virtual assistant for data entry and web research
                    </h2>
                    <div className="job-details__seller-overview">
                        <Image
                            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f0682900a8c24bb7eec11a92b3eafab9-1665391489527/37af70cc-a58a-486f-9749-b1e2eea5aa3d.jpg"
                            alt="Seller image"
                        />
                        <span>akansha_yadav</span>
                        <div className="job-details__rating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />

                            <span className="job-details__rating-number">5</span>
                            <span className="job-details__rating-count">(11)</span>
                        </div>

                        <div className="job-details__img">
                            <Image src="https://fiverrnew.cybersoft.edu.vn/images/cv10.jpg" alt="job illustration" />
                        </div>
                    </div>
                </section>

                <section className="job-details-content__wrapper">
                    <h3 className="job-details-content__title">About This Gig</h3>
                    <div className="job-details-about__content">
                        <span className="job-details-content__text">
                            Welcome to my Gig! Are you looking for a reliable Virtual Assistant? Then, you are at the
                            very right place, I will be your reliable Virtual Assistant :)
                        </span>

                        <br />

                        <span className="job-details-content__text--bold">About Me:</span>
                        <span className="job-details-content__text">
                            My name is Akansha and I have 6+ years of experience as a virtual assistant. Over the years
                            I became an expert in Data Entry, Web Research, Administrative tasks, Data Scraping, lead
                            generation, etc.
                        </span>
                    </div>
                </section>

                <section className="job-details-content__wrapper job-details-content__wrapper—seller">
                    <h3 className="job-details-content__title">About The Seller</h3>
                    <div className="job-details-seller__content">
                        <Image
                            alt="seller photo"
                            className="job-details-seller__img"
                            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f0682900a8c24bb7eec11a92b3eafab9-1665391489527/37af70cc-a58a-486f-9749-b1e2eea5aa3d.jpg"
                        />
                        <div className="job-details-seller__info">
                            <p>akansha_yadav</p>

                            <div className="job-details__rating">
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />

                                <span className="job-details__rating-number">5</span>
                                <span className="job-details__rating-count">(11)</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="job-details-content__wrapper job-details-content__wrapper—review">
                    <h3 className="job-details-content__title">Reviews</h3>
                    <div className="job-details__rating">
                        <span>11 reviews for this Gig</span>

                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />

                        <span className="job-details__rating-number">5</span>
                    </div>
                    <div className="job-details-review__list">
                        <div className="job-details-review__item">
                            <div className="job-details-review__user">
                                <Image
                                    alt="user's photo"
                                    src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/5ebae2f389dc15a4683388608c82cf94-25764421668047389.7116652/BD687C68-958F-4D24-B3F9-C037A99B7EB6"
                                />
                                <div className="job-details-review__user-info">
                                    <p className="user-info__name">sbajaio</p>
                                    <p className="user-info__country">Germany</p>
                                </div>
                            </div>

                            <div className="job-details__rating">
                                <span>11 reviews for this Gig</span>

                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span className="job-details__rating-number">5</span>
                            </div>

                            <div className="job-details-review__text">
                                <p>
                                    Akansha is awesome. She is honest, upfront, communicative. effective and delivers
                                    quality work. Couldn't ask for more. Amazing work will definitely work together
                                    again soon!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default JobDetailsPage;
