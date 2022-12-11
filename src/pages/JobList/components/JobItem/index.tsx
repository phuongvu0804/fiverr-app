import { Favorite, Star } from '@mui/icons-material';
import { Grid } from '@mui/material';

//Others
import './JobItem.scss';

const JobItem = () => {
    return (
        <>
            <Grid item xs={12} sm={6} md={3} className="job-list__item">
                <div className="job-list__item-head">
                    <img
                        src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/254097659/original/0b11aa37fc82913dce66e0f184917ed45a710c6f.jpg"
                        alt=""
                        className="job-list__item-img"
                    />
                </div>
                <div className="job-list__item-body">
                    <div className="item-body__user">
                        <div className="item-body__user-img">
                            <img
                                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/4b8275d88277e312a120ba3b4a5d513a-1632324033460/16c840df-22fc-4e1f-a32e-95dbf9c1705d.jpg"
                                alt="user's avatar"
                            />
                        </div>
                        <p className="item-body__user-name">umermalik_</p>
                    </div>

                    <p className="item-body__desc">
                        I will create custom scraping or automation software I will create custom scraping or automation
                        software I will create custom scraping or automation software I will create custom scraping or
                        automation software I will create custom scraping or automation software
                    </p>

                    <div className="item-body__rating">
                        <Star className="item-content__rating-star" />
                        5.0
                        <span className="item-content__rating-number">(103)</span>
                    </div>
                </div>
                <div className="job-list__item-footer">
                    <Favorite className="item-footer__like" />
                    <span className="item-footer__salary">
                        STARTING AT
                        <span className="item-footer__salary-number">
                            €498
                            <sup className="item-footer__salary-number-decimal">08</sup>
                        </span>
                    </span>
                </div>
            </Grid>
        </>
    );
};

export default JobItem;
