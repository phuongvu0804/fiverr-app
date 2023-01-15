import { useAppDispatch, useAppSelector } from '@/hooks';
import React, { useEffect, useState } from 'react';

//Components
import Gig from './components/Gig';
import LearnCard from './components/LearnCard';
import UserCard from './components/UserCard';
import LoadMoreBtn from '@/components/LoadMoreBtn';
import MUIAlert from '@/components/MUIAlert';

//Others
import { UserDataProps } from '@/constants/intefaces';
import './Profile.scss';
import { DATA_INIT_STATE, LEARN_CARD_DATA } from './constants';
import { getBookingList } from '@/store/actions/booking';
import useLogError from '@/hooks/useLogError';
import { BookingItemProps } from './types';

const Profile = () => {
    let timeOutId;
    const VISIBLE_NUMBER = 2;

    const USER_DATA = useAppSelector((state) => state.user.data);
    const BOOKING_LIST_DATA = useAppSelector((state) => state.booking.data);
    const LOADING = useAppSelector((state) => state.booking.loading);
    const ALERT = useAppSelector((state) => state.alert.data);
    const ALERT_TYPE = useAppSelector((state) => state.alert.type);
    const dispatch = useAppDispatch();
    const logError = useLogError();

    const [data, setData] = useState<UserDataProps>(DATA_INIT_STATE);
    const [filteredBookingList, setFilteredBookingList] = useState<BookingItemProps[]>([]);
    const [visible, setVisible] = useState<number>(VISIBLE_NUMBER);
    const [loading, setLoading] = useState(false);

    //Fetch booking service data
    useEffect(() => {
        const controller = new AbortController();
        dispatch(getBookingList(logError));

        LOADING && setLoading(false);

        return () => {
            controller.abort();
        };
    }, [ALERT_TYPE]);

    useEffect(() => {
        USER_DATA && setData(USER_DATA);
    }, [USER_DATA]);

    useEffect(() => {
        if (BOOKING_LIST_DATA) {
            setFilteredBookingList(BOOKING_LIST_DATA);
        }
        if (BOOKING_LIST_DATA?.length) {
            handleNumberOfDisplays();
        }
    }, [BOOKING_LIST_DATA, visible, LOADING]);

    const handleNumberOfDisplays = () => {
        let newList: any = [...BOOKING_LIST_DATA];
        newList = newList?.slice(0, visible);
        setFilteredBookingList(newList);
    };

    return (
        <div id="profile" className="padding-top-page">
            <div className="profile__wrapper">
                <div className="profile__group profile__group--info-column">
                    <UserCard data={data} loading={loading} />
                    <LearnCard data={LEARN_CARD_DATA} loading={loading} />
                </div>
                <div className="profile__group profile__group--gig-column">
                    <Gig data={filteredBookingList} loading={loading} timeOutId={timeOutId} />

                    {/* If the number of posts display bigger than the number of posts visible and there is no loading, load more Btn appears */}
                    {visible >= VISIBLE_NUMBER && visible < BOOKING_LIST_DATA?.length && !loading && (
                        <LoadMoreBtn
                            className="contained-primary-btn"
                            visibleNumber={VISIBLE_NUMBER}
                            setVisible={setVisible}
                        >
                            Load More
                        </LoadMoreBtn>
                    )}
                </div>
            </div>
            <MUIAlert openAlert={ALERT} timeOutId={timeOutId} />
        </div>
    );
};

export default Profile;
