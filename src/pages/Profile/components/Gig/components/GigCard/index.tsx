import { Link } from 'react-router-dom';
import { useState } from 'react';

//Components
import Image from '@/components/Image';

//Material UI
import { Button, Grid, Skeleton } from '@mui/material';

//Others
import { BookingItemProps } from '@/pages/Profile/types';
import MUIConfirmDialog from '../../../MUIConfirmDialog';
import { TimeOutIdType } from '@/constants/intefaces';

interface Props {
    data: BookingItemProps | null;
    loading: boolean;
    timeOutId: TimeOutIdType;
}

const GigCard = ({ data, loading, timeOutId }: Props) => {
    const [openDialog, setOpenDialog] = useState(false);

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
                    timeOutId={timeOutId}
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
