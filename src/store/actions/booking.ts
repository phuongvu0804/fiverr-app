import bookingApi from '@/api/booking';
import { BookingInfo } from '@/assets/models/BookingInfor';
import { SUCCESS_ALERT } from '@/pages/JobDetailsPage/constants';
import { BookingActionType } from '../constants/booking';

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
                return SUCCESS_ALERT;
            } catch (error) {
                dispatch(actBookingFail(error));
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
