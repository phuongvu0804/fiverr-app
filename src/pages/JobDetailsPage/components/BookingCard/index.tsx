//Material UI
import { AccessTime, Autorenew } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { SectionProps } from '../../types';

//Others
import './BookingCard.scss';
import MUIDialog from './components/MUIDialog';

interface Props extends SectionProps {
    className?: string;
    scrollDown?: boolean;
}

const BookingCard = ({ data, className, scrollDown }: Props) => {
    const [hour, setHour] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);

    //Html tag - div for PC, - section for tablet + mobile
    const HtmlTag = className === 'hide-on-tablet-mobile' ? 'div' : 'section';

    const handleHourInput = (e: ChangeEvent<HTMLInputElement>) => {
        const INPUT_VALUE = Number(e.target.value);
        setHour(INPUT_VALUE);
    };

    const handleTotalPrice = () => {
        return hour * data.congViec.giaTien;
    };

    const handleBooking = () => {
        const USER = localStorage.getItem('user');
        if (USER) {
            setOpenDialog(true);
        }
    };

    return (
        <HtmlTag
            id="price"
            className={scrollDown ? `job-details__booking ${className} on-scroll` : `job-details__booking ${className}`}
        >
            <p className="job-details-booking__price">€{data.congViec.giaTien}/ hour</p>

            <div className="job-details-booking__desc">
                <p>{data.congViec.moTaNgan}</p>
            </div>

            <div className="job-details-booking__add-info-list">
                <div className="job-details-booking__add-info-item">
                    <AccessTime />
                    <span>2 Days Delivery</span>
                </div>

                <div className="job-details-booking__add-info-item">
                    <Autorenew />
                    <span>7 Revisions</span>
                </div>
            </div>

            <div className="job-details-booking__hour">
                <span>Hours of work</span>
                <input value={hour} type="number" min="1" onChange={handleHourInput} />
            </div>

            <Button variant="contained" className="contained-primary-btn" onClick={handleBooking}>
                Continue (€{handleTotalPrice()})
            </Button>

            <MUIDialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                hour={hour}
                data={data}
                totalPrice={handleTotalPrice()}
            />
        </HtmlTag>
    );
};

export default BookingCard;
