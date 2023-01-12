import bookingApi from '@/api/booking';
import { BookingInfo } from '@/assets/models/BookingInfor';
import { FAIL_BOOKING_ALERT, SUCCESS_BOOKING_ALERT } from '@/pages/JobDetailsPage/constants';
import { FAIL_DELETE_ALERT, SUCCESS_DELETE_ALERT } from '@/pages/Profile/constants';
import { BookingActionType } from '../constants/booking';
import { actOpenAlert } from './alert';

export const actBookingRequest = () => {
    return {
        type: BookingActionType.bookingRequest,
    };
};

export const actBookingSuccess = (data: any) => {
    return {
        type: BookingActionType.bookingSuccess,
        payload: data,
    };
};

export const actBookingFail = (error: any) => {
    return {
        type: BookingActionType.bookingFail,
        payload: error,
    };
};

export const BookingJob = (bookingInfo = new BookingInfo()) => {
    return (dispatch: any) => {
        dispatch(actBookingRequest());

        const fetchBooking = async () => {
            const result = await bookingApi.bookService(bookingInfo);

            try {
                dispatch(actBookingSuccess(result.data.content));
                dispatch(actOpenAlert(SUCCESS_BOOKING_ALERT));
            } catch (error) {
                dispatch(actBookingFail(error));
                dispatch(actOpenAlert(FAIL_BOOKING_ALERT));
            }
        };

        fetchBooking();
    };
};

export const actGetBookingListRequest = () => {
    return {
        type: BookingActionType.getBookingListResquest,
    };
};

export const actGetBookingListSuccess = (data: any) => {
    return {
        type: BookingActionType.getBookingListSuccess,
        payload: data,
    };
};

export const actGetBookingListFail = (error: any) => {
    return {
        type: BookingActionType.getBookingListFail,
        payload: error,
    };
};

export const getBookingList = () => {
    return (dispatch: any) => {
        dispatch(actGetBookingListRequest());

        const fetchBookingList = async () => {
            const result = await bookingApi.getBookingList();
            try {
                dispatch(actGetBookingListSuccess(result.data.content));
            } catch (error) {
                dispatch(actGetBookingListFail(error));
            }
        };

        fetchBookingList();
    };
};

export const actDeleteBookingRequest = () => {
    return {
        type: BookingActionType.deleteBookingRequest,
    };
};

export const actDeleteBookingSuccess = (data: any) => {
    return {
        type: BookingActionType.deleteBookingSuccess,
        payload: data,
    };
};

export const actDeleteBookingFail = (error: any) => {
    return {
        type: BookingActionType.deleteBookingFail,
        payload: error,
    };
};

export const deleteBooking = (id: Number) => {
    return (dispatch: any) => {
        dispatch(actDeleteBookingRequest());

        const fetchDeleteBooking = async () => {
            const result = await bookingApi.deleteBooking(id);
            try {
                dispatch(actDeleteBookingSuccess(result.data.content));
                dispatch(actOpenAlert(SUCCESS_DELETE_ALERT));
            } catch (error) {
                dispatch(actDeleteBookingFail(error));
                dispatch(actOpenAlert(FAIL_DELETE_ALERT));
            }
        };

        fetchDeleteBooking();
    };
};
