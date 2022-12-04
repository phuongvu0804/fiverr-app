import React from 'react';

//Material UI
import { Box, Modal } from '@mui/material';
import { SellingPropoProps } from '@/pages/Home/interfaces';

interface Props {
    data: SellingPropoProps;
    openVid: boolean;
    setOpenVid: React.Dispatch<React.SetStateAction<boolean>>;
}

const SellingModal = (props: Props) => {
    const { data, openVid, setOpenVid } = props;

    return (
        <Modal open={openVid} onClose={() => setOpenVid(false)}>
            <Box className="selling-propo__modal">
                <video width="320" height="240" controls autoPlay>
                    <source src={data.video} />
                </video>
            </Box>
        </Modal>
    );
};

export default SellingModal;
