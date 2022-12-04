import React, { useState } from 'react';

//Material UI
import { Pause, PlayArrow } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';

//Others
import { SellingPropoProps } from '../../interfaces';
import './SellingPropo.scss';
import SellingPropoItem from './components/SellingPropoItem';
import SellingModal from './components/SellingModal';

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
                    <img src={data.image} />
                    <IconButton className="selling-propo__illustration-btn" onClick={() => setOpenVid(true)}>
                        {openVid ? (
                            <Pause className="selling-propo__illustration-icon" />
                        ) : (
                            <PlayArrow className="selling-propo__illustration-icon" />
                        )}
                    </IconButton>
                </Grid>
            </Grid>
            <SellingModal data={data} openVid={openVid} setOpenVid={setOpenVid} />
        </div>
    );
};

export default SellingPropo;
