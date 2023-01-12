import React from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle, Dialog } from '@mui/material';
import { MUIAlertProps } from '@/constants/intefaces';

interface Props {
    openAlert: MUIAlertProps;
    onOpenAlert: React.Dispatch<React.SetStateAction<MUIAlertProps>>;
    timeOutId: number | undefined;
}

const MUIAlert = ({ openAlert, onOpenAlert, timeOutId }: Props) => {
    const closeAlert = () => {
        onOpenAlert({ ...openAlert, state: false });

        //Clear timeout
        clearTimeout(timeOutId);
    };
    return (
        <Dialog open={openAlert.state} onClose={closeAlert}>
            <Alert severity={openAlert.type} sx={{ fontSize: '16px', alignItems: 'center' }}>
                <AlertTitle sx={{ fontSize: '18px' }}>{openAlert.title}</AlertTitle>
                {openAlert.content}
            </Alert>
        </Dialog>
    );
};

export default MUIAlert;
