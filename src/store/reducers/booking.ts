import { ActionProps } from '../actions/types';
import { BookingActionType } from '../constants/booking';
import { StateProps } from './types';

const INITIAL_STATE: StateProps = {
    loading: false,
    data: null,
    error: null,
};

const booking = (state: StateProps = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case BookingActionType.bookingRequest:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case BookingActionType.bookingSuccess:
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case BookingActionType.bookingFail:
            return {
                loading: false,
                data: null,
                error: action.payload,
            };
        case BookingActionType.getBookingListResquest:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case BookingActionType.getBookingListSuccess:
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case BookingActionType.getBookingListFail:
            return {
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default booking;
