import Alert from '@mui/material/Alert';
import { AlertTitle, Dialog } from '@mui/material';
import { MUIAlertProps, TimeOutIdType } from '@/constants/intefaces';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { actCloseAlert } from '@/store/actions/alert';

interface Props {
    openAlert: MUIAlertProps;
    timeOutId: TimeOutIdType;
}

const MUIAlert = ({ openAlert, timeOutId }: Props) => {
    const dispatch = useAppDispatch();

    const TYPE = useAppSelector((state) => state.alert.type);

    const closeAlert = () => {
        dispatch(actCloseAlert());

        //Clear timeout
        clearTimeout(timeOutId);
    };
    return (
        <Dialog open={TYPE === 'OPEN' ? true : false} onClose={closeAlert}>
            <Alert severity={openAlert.type} sx={{ fontSize: '16px', alignItems: 'center' }}>
                <AlertTitle sx={{ fontSize: '18px' }}>{openAlert.title}</AlertTitle>
                {openAlert.content}
            </Alert>
        </Dialog>
    );
};

export default MUIAlert;
