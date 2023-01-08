import { Button, Grid } from '@mui/material';
import React from 'react';

const GigCard = () => {
    return (
        <section className="profile__gig-card">
            <Grid container className="gig-card__wrapper">
                <Grid item xs={4} md={4} className="gig-card__img">
                    <img src="https://fiverrnew.cybersoft.edu.vn/images/cv1.jpg" alt="" />
                </Grid>
                <Grid item xs={8} md={8} className="gig-card__content">
                    <p>I will design an outstanding logo</p>
                    <span>
                        Plus - MOST SELLING! US$65 3 logo options + source file in Ai, EPS, SVG, PDF, and PSD 2 Days
                        Delivery 5 Revisions 3 concepts included Logo transparency Vector file Printable file Source
                        file
                    </span>

                    <div className="gig-card__button-list">
                        <Button variant="contained" className="gig-card__button gig-card__button—view" color="success">
                            View
                        </Button>
                        <Button variant="contained" className="gig-card__button gig-card__button—delete" color="error">
                            Delete
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default GigCard;
