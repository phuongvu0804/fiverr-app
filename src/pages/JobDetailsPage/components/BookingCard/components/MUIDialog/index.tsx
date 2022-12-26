import React from 'react';

//Material UI
import { Button, Card, Dialog, DialogActions, DialogTitle } from '@mui/material';
import Image from '@/components/Image';
import { Box } from '@mui/system';

//Others
import './MUIDialog.scss';
import { BookingJob } from '@/store/actions/booking';
import { useAppDispatch } from '@/hooks';
import { BookingInfo } from '@/assets/models/BookingInfor';
import { PostProps } from '@/pages/JobListPage/types';
import moment from 'moment';

interface Props {
    data: PostProps;
    hour: number;
    totalPrice: number;
    openDialog: boolean;
    setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const MUIDialog = ({ openDialog, setOpenDialog, data, hour, totalPrice }: Props) => {
    const dispatch = useAppDispatch();

    const handleConfirm = () => {
        setOpenDialog(false);
        const bookingInfo = new BookingInfo();
        bookingInfo.id = data.congViec.id;
        bookingInfo.maNguoiThue = 1826;
        bookingInfo.ngayThue = moment().format('DD/MM/YYYY');
        bookingInfo.hoanThanh = true;

        dispatch(BookingJob(bookingInfo));
    };

    return (
        <Dialog className="job-details-booking__dialog" open={openDialog} onClose={() => setOpenDialog(false)}>
            <DialogTitle id="alert-dialog-title">{'Confirm & Pay'}</DialogTitle>
            <div className="booking__dialog-head">
                <Image
                    src="https://fiverr-res.cloudinary.com/images/t_medium5,q_auto,f_auto/gigs/138708888/original/a9e729364889531c9cdc3029107657f9e81b31c2/be-your-web-developer-php-codeigniter-609b.jpg"
                    alt="photo"
                />
                <h4>I will create web aplication using php, codeigniter, laravel</h4>
            </div>
            <div className="booking__dialog-content">
                <div className="booking__dialog-content-group">
                    <span className="dialog-content-group__name">Hours</span>
                    <span className="dialog-content-group__value">{hour}</span>
                </div>
                <div className="booking__dialog-content-group">
                    <span className="dialog-content-group__name">Price per hour</span>
                    <span className="dialog-content-group__value">€{data.congViec.giaTien}</span>
                </div>
                <div className="booking__dialog-content-group booking__dialog-content-group--total">
                    <span className="dialog-content-group__name">Total</span>
                    <span className="dialog-content-group__value">€{totalPrice}</span>
                </div>
            </div>
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
                    variant="outlined"
                    color="error"
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MUIDialog;
