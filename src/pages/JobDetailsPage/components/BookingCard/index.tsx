//Material UI
import MUIAlert from '@/components/MUIAlert';
import { LOCAL_STORAGE_USER_NAME } from '@/constants/constants';
import { MUIAlertProps } from '@/constants/intefaces';
import { AccessTime, Autorenew } from '@mui/icons-material';
import { Button } from '@mui/material';
import { ChangeEvent, Dispatch, ElementType, SetStateAction, useEffect, useState } from 'react';
import { ADDITIONAL_INFO } from '../../constants';
import { SectionProps } from '../../types';

//Others
import './BookingCard.scss';
import MUIDialog from './components/MUIDialog';

interface Props extends SectionProps {
    className?: string;
    scrollDown?: boolean;
    openAlert: MUIAlertProps;
    setOpenAlert: Dispatch<SetStateAction<MUIAlertProps>>;
    timeOutId: number | undefined;
}

const BookingCard = ({ data, className, scrollDown, openAlert, setOpenAlert, timeOutId }: Props) => {
    let HtmlTag: ElementType = 'div';

    const [hour, setHour] = useState<number>(1);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    useEffect(() => {
        //Html tag - div for PC, - section for tablet + mobile
        HtmlTag = className === 'hide-on-tablet-mobile' ? 'div' : 'section';
    }, []);

    const renderAddInfo = () => {
        return ADDITIONAL_INFO.map((item, index) => {
            return (
                <div key={index} className="job-details-booking__add-info-item">
                    {item.icon}
                    <span>{item.content}</span>
                </div>
            );
        });
    };

    const handleHourInput = (e: ChangeEvent<HTMLInputElement>) => {
        const INPUT_VALUE = Number(e.target.value);
        setHour(INPUT_VALUE);
    };

    const handleTotalPrice = () => {
        return hour * data.congViec.giaTien;
    };

    const handleBooking = () => {
        const USER = localStorage.getItem(LOCAL_STORAGE_USER_NAME);
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

            <div className="job-details-booking__add-info-list">{renderAddInfo()}</div>

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
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                timeOutId={timeOutId}
                hour={hour}
                data={data}
                totalPrice={handleTotalPrice()}
            />
        </HtmlTag>
    );
};

export default BookingCard;
