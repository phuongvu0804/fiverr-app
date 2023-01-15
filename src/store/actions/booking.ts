import bookingApi from '@/api/booking';
import { callApi } from '@/api/config/errorHandling';
import { BookingInfo } from '@/assets/models/BookingInfor';
import { LogErrorProps } from '@/constants/intefaces';
import { SUCCESS_BOOKING_ALERT } from '@/pages/JobDetailsPage/constants';
import { FAIL_DELETE_ALERT, SUCCESS_DELETE_ALERT } from '@/pages/Profile/constants';
import { BookingItemProps } from '@/pages/Profile/types';
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

export const BookingJob = (bookingInfo = new BookingInfo(), logError: (error: LogErrorProps) => false | void) => {
    return (dispatch: any) => {
        dispatch(actBookingRequest());

        callApi(
            bookingApi.bookService(bookingInfo),
            (response: any) => {
                dispatch(actBookingSuccess(response));
                dispatch(actOpenAlert(SUCCESS_BOOKING_ALERT));
            },
            (error: LogErrorProps) => {
                dispatch(actBookingFail(error));
                logError(error);
            },
        );
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

export const getBookingList = (logError: (error: LogErrorProps) => false | void) => {
    return (dispatch: any) => {
        dispatch(actGetBookingListRequest());

        callApi(
            bookingApi.getBookingList(),
            (result: BookingItemProps) => {
                dispatch(actGetBookingListSuccess(result));
            },
            (error: LogErrorProps) => {
                //Dispatch error to redux and display the error message to user
                dispatch(actGetBookingListFail(error));
                logError(error);
            },
        );
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

        callApi(
            bookingApi.deleteBooking(id),
            (result: BookingItemProps[]) => {
                dispatch(actDeleteBookingSuccess(result));
                dispatch(actOpenAlert(SUCCESS_DELETE_ALERT));
            },
            (error: LogErrorProps) => {
                //Dispatch error to redux and display the error alert to user
                dispatch(actDeleteBookingFail(error));
                dispatch(actOpenAlert(FAIL_DELETE_ALERT));
            },
        );
    };
};
