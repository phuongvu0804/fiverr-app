import { ActionProps } from '../actions/types';
import { BookingActionType } from '../constants/booking';
import { userActionType } from '../constants/user';
import { StateProps } from './types';

interface Props {
    loading: boolean;
    bookedList: [];
    likedList: [];
    error: string | [] | null;
}

const initialState: Props = {
    loading: false,
    bookedList: [],
    likedList: [],
    error: null,
};

const userReducer = (state: Props = initialState, action: any) => {
    switch (action.type) {
        case userActionType.addLikedPostRequest:
        case userActionType.removeLikedPostRequest:
            return {
                ...state,
                loading: true,
            };
        case userActionType.addLikedPostSuccess:
            return {
                ...state,
                loading: false,
                likedList: [...state.likedList, action.payload],
            };

        case userActionType.removeLikedPostSuccess:
            return {
                ...state,
                loading: false,
                likedList: [...action.payload],
            };
        case userActionType.addLikedPostFail:
        case userActionType.removeLikedPostFail:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
