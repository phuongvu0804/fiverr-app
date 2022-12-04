import React, { useState } from 'react';

//Material UI
import { Grid } from '@mui/material';

//Others
import { SellingPropoProps } from '../../interfaces';
import './SellingPropo.scss';
import SellingPropoItem from './components/SellingPropoItem';
import Video from '@/components/Video';

const SellingPropo = ({ data }: { data: SellingPropoProps }) => {
    const [openVid, setOpenVid] = useState(false);

    const renderSellingPropoItem = () => {
        return data.content.map((item, index) => {
            return <SellingPropoItem key={index} data={item} />;
        });
    };

    return (
        <div className="home__selling-propo mb-l">
            <Grid container className="container-center">
                <Grid item md={6} className="selling-propo__content">
                    <h3 className="sub-title__md">{data.title}</h3>
                    <div className="selling-propo__list">{renderSellingPropoItem()}</div>
                </Grid>
                <Grid item md={6} className="selling-propo__illustration">
                    <Video
                        openVid={openVid}
                        setOpenVid={setOpenVid}
                        classNameButton="selling-propo__illustration-btn"
                        classNameIcon="selling-propo__illustration-icon"
                        classNameModal="selling-propo__modal"
                        image={data.image}
                        video={data.video}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default SellingPropo;
