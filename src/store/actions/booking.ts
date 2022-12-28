import { jobApi } from '@/api';
import { BookingInfo } from '@/assets/models/BookingInfor';
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

export const BookingJob = (service: any) => {
    return (dispatch: any) => {
        dispatch(actBookingRequest());

        const fetchBooking = async () => {
            const result = await jobApi.bookService(service);

            try {
                dispatch(actBookingSuccess(result));
            } catch (error) {
                dispatch(actBookingFail(error));
            }
        };

        fetchBooking();
    };
};
