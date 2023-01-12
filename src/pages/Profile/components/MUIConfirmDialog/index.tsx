import Image from '@/components/Image';
import { TimeOutIdType } from '@/constants/intefaces';
import { useAppDispatch } from '@/hooks';
import { actCloseAlert } from '@/store/actions/alert';
import { deleteBooking } from '@/store/actions/booking';

import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material';
import { Box } from '@mui/system';

//Others
import { BookingItemProps } from '../../types';
import './MUIConfirmDialog.scss';

interface Props {
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    data: BookingItemProps | null;
    timeOutId: TimeOutIdType;
}

const MUIConfirmDialog = ({ openDialog, setOpenDialog, data, timeOutId }: Props) => {
    const dispatch = useAppDispatch();

    const handleDelete = (id: Number) => {
        setOpenDialog(false);
        dispatch(deleteBooking(id));

        timeOutId = window.setTimeout(() => {
            dispatch(actCloseAlert());
        }, 3000);
    };
    return (
        data && (
            <Dialog className="profile__dialog" open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: '1.8rem' }}>
                    Confirm to delete
                </DialogTitle>
                <div className="profile__dialog-wrapper">
                    <Image src={data?.congViec.hinhAnh} alt="photo" />
                    <Box>
                        <div className="profile__dialog-content">
                            <h4>{data?.congViec.tenCongViec}</h4>
                            <p>{data?.congViec.moTa}</p>
                        </div>
                        <DialogActions>
                            <Button
                                className="profile__dialog-btn profile__dialog-btn—-confirm"
                                variant="contained"
                                onClick={() => {
                                    handleDelete(data?.id);
                                }}
                            >
                                Delete
                            </Button>
                            <Button
                                className="profile__dialog-btn profile__dialog-btn—-cancel"
                                onClick={() => setOpenDialog(false)}
                                autoFocus
                                variant="contained"
                                color="error"
                            >
                                Cancel
                            </Button>
                        </DialogActions>
                    </Box>
                </div>
            </Dialog>
        )
    );
};

export default MUIConfirmDialog;
