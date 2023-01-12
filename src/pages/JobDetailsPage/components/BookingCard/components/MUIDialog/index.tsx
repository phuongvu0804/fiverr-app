import React from 'react';
import moment from 'moment';

//Material UI
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import Image from '@/components/Image';

//Others
import './MUIDialog.scss';
import { BookingJob } from '@/store/actions/booking';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { BookingInfo } from '@/assets/models/BookingInfor';
import { PostProps } from '@/pages/JobListPage/types';
import { UserDataProps } from '@/constants/intefaces';
import { actCloseAlert } from '@/store/actions/alert';

interface Props {
    data: PostProps;
    hour: number;
    totalPrice: number;
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
    timeOutId: number | undefined;
}

interface bookingInfoProps {
    name: string;
    data: number;
}

const MUIDialog = ({ openDialog, setOpenDialog, timeOutId, data, hour, totalPrice }: Props) => {
    let bookingInfo: bookingInfoProps[] = [
        {
            name: 'Hour',
            data: hour,
        },
        {
            name: 'Price per hour',
            data: data.congViec.giaTien,
        },
        {
            name: 'Total',
            data: totalPrice,
        },
    ];

    const dispatch = useAppDispatch();
    const USER_DATA: UserDataProps = useAppSelector((state) => state.user.data);

    const handleConfirm = () => {
        setOpenDialog(false);
        const bookingInfo = new BookingInfo();
        bookingInfo.maCongViec = data.congViec.id;
        bookingInfo.maNguoiThue = USER_DATA.id;
        bookingInfo.ngayThue = moment().format('DD/MM/YYYY');
        bookingInfo.hoanThanh = true;

        dispatch(BookingJob(bookingInfo));

        timeOutId = window.setTimeout(() => {
            dispatch(actCloseAlert());
        });
    };

    const renderBookingInfo = () => {
        return bookingInfo.map((item, index) => (
            <div key={index} className="booking__dialog-content-group">
                <span className="dialog-content-group__name">{item.name}</span>
                <span className="dialog-content-group__value">{item.data}</span>
            </div>
        ));
    };
    return (
        <Dialog className="job-details-booking__dialog" open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle id="alert-dialog-title">{'Confirm & Pay'}</DialogTitle>
            <div className="booking__dialog-head">
                <Image src={data.congViec.hinhAnh} alt="photo" />
                <h4>{data.congViec.tenCongViec}</h4>
            </div>
            <div className="booking__dialog-content">{renderBookingInfo()}</div>
            <DialogActions>
                <Button
                    className="booking__dialog-btn booking__dialog-btn—-confirm"
                    variant="contained"
                    onClick={handleConfirm}
                >
                    Confirm
                </Button>
                <Button
                    className="booking__dialog-btn booking__dialog-btn—-cancel"
                    onClick={() => setOpenDialog(false)}
                    autoFocus
                    variant="contained"
                    color="error"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MUIDialog;
