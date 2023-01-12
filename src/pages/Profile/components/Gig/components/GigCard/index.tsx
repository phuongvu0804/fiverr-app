import { Link } from 'react-router-dom';
import { useState } from 'react';

//Components
import Image from '@/components/Image';

//Material UI
import { Button, Grid, Skeleton } from '@mui/material';

//Others
import { BookingItemProps, UseAlertProps } from '@/pages/Profile/types';
import bookingApi from '@/api/booking';
import MUIConfirmDialog from '../../../MUIConfirmDialog';
import { useAppDispatch } from '@/hooks';
import { getBookingList } from '@/store/actions/booking';
import { FAIL_ALERT, SUCCESS_ALERT } from '@/pages/JobDetailsPage/constants';

interface Props extends UseAlertProps {
    data: BookingItemProps | null;
    loading: boolean;
}

const GigCard = ({ data, loading, openAlert, onOpenAlert, timeOutId }: Props) => {
    const dispatch = useAppDispatch();
    const [openDialog, setOpenDialog] = useState(false);

    const handleDeleteBooking = async (id: Number) => {
        await bookingApi.deleteBooking(id);
        try {
            //Close delete dialog
            setOpenDialog(false);

            //Show success alert
            onOpenAlert(SUCCESS_ALERT);

            dispatch(getBookingList());
        } catch (error) {
            //Show success alert
            onOpenAlert(FAIL_ALERT);
        } finally {
            //Close alert after 3s
            timeOutId = window.setTimeout(() => {
                onOpenAlert({ ...openAlert, state: false });
            }, 3000);
        }
    };

    return data && !loading ? (
        <>
            <div className="profile__gig-card">
                <Grid container className="gig-card__wrapper">
                    <Grid item xs={4} md={4} className="gig-card__img">
                        <Image src={data?.congViec.hinhAnh} alt={data?.congViec.tenCongViec} />
                    </Grid>
                    <Grid item xs={8} md={8} className="gig-card__content">
                        <p>{data?.congViec.tenCongViec}</p>
                        <span>{data?.congViec.moTaNgan}</span>

                        <div className="gig-card__button-list">
                            <Button
                                variant="contained"
                                className="gig-card__button gig-card__button—view"
                                color="success"
                                component={Link}
                                to={`/job-details/${data.congViec.id}`}
                            >
                                View
                            </Button>
                            <Button
                                variant="contained"
                                className="gig-card__button gig-card__button—delete"
                                color="error"
                                onClick={() => setOpenDialog(true)}
                            >
                                Delete
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <MUIConfirmDialog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    data={data}
                    handleDelete={handleDeleteBooking}
                />
            </div>
        </>
    ) : (
        <div className="profile__gig-card">
            <Grid container className="gig-card__wrapper">
                <Grid item xs={4} md={4} className="gig-card__img">
                    <Skeleton variant="rounded" width={210} height={140} />
                </Grid>
                <Grid item xs={8} md={8} className="gig-card__content">
                    <Skeleton variant="text" sx={{ fontSize: '18px' }} height={27} />
                    <Skeleton variant="text" sx={{ fontSize: '16px' }} height={80} />

                    <div className="gig-card__button-list">
                        <Button variant="contained" className="gig-card__button gig-card__button—view" color="success">
                            View
                        </Button>
                        <Button variant="contained" className="gig-card__button gig-card__button—delete" color="error">
                            Delete
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default GigCard;
