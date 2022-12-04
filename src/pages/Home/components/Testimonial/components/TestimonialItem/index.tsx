import React, { useState } from 'react';

//Material UI
import { Divider, Grid } from '@mui/material';

//Components
import Video from '@/components/Video';
import { TestimonialItemProps } from '@/pages/Home/interfaces';

const TestimonialItem = ({ data }: { data: TestimonialItemProps }) => {
    const [openVid, setOpenVid] = useState(false);
    return (
        <Grid container className="testimonial-item">
            <Grid item xs={12} sm={12} md={5} className="testimonial-item__illustration">
                <Video image={data.image} video={data.video} openVid={openVid} setOpenVid={setOpenVid} />
            </Grid>
            <Grid item xs={12} sm={12} md={7} className="testimonial-item__content">
                <div className="testimonial-item__content-title">
                    <h6>
                        {data.name}, {data.job}
                    </h6>
                    <Divider
                        orientation="vertical"
                        className="testimonial-item__content-divider hide-on-tablet-mobile "
                        flexItem
                    />
                    <img className="testimonial-item__content-logo" src={data.logo} />
                </div>
                <blockquote>{data.content}</blockquote>
            </Grid>
        </Grid>
    );
};

export default TestimonialItem;
