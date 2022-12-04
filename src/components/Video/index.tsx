import React from 'react';

//Material UI
import { Pause, PlayArrow } from '@mui/icons-material';
import { IconButton, Modal } from '@mui/material';
import { Box } from '@mui/system';

//Others
import { SellingPropoProps } from '@/pages/Home/interfaces';
import './Video.scss';

interface Props {
    openVid: boolean;
    setOpenVid: React.Dispatch<React.SetStateAction<boolean>>;
    image: string;
    video: string;
    data?: SellingPropoProps;
    classNameButton?: string;
    classNameIcon?: string;
    classNameModal?: string;
}

const Video = ({ image, video, openVid, setOpenVid, classNameButton, classNameIcon, classNameModal }: Props) => {
    return (
        <div id="video">
            <img src={image} />

            <IconButton className={`video__btn ${classNameButton}`} onClick={() => setOpenVid(true)}>
                {openVid ? (
                    <Pause className={`video__btn-icon ${classNameIcon}`} />
                ) : (
                    <PlayArrow className={`video__btn-icon ${classNameIcon}`} />
                )}
            </IconButton>
            <Modal open={openVid} onClose={() => setOpenVid(false)}>
                <Box className={`video__modal ${classNameModal}`}>
                    <video width="320" height="240" controls autoPlay>
                        <source src={video} />
                    </video>
                </Box>
            </Modal>
        </div>
    );
};

export default Video;
