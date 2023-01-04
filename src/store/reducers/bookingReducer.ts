import { ActionProps } from '../actions/types';
import { BookingActionType } from '../constants/booking';
import { JobCategoryActionType } from '../constants/jobCategoryList';
import { StateProps } from './types';

const INITIAL_STATE: StateProps = {
    loading: false,
    data: null,
    error: null,
};

const bookingReducer = (state: StateProps = INITIAL_STATE, action: any) => {
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
        default:
            return state;
    }
};

export default bookingReducer;
