import { jobApi } from '@/api';
import { BookingInfo } from '@/assets/models/BookingInfor';
import { BookingActionType } from '../constants/booking';
import { userActionType } from '../constants/user';

export const actGetUserProfileRequest = () => {
    return {
        type: userActionType.getUserProfileRequest,
    };
};

export const actGetUserProfileSuccess = (data: any) => {
    return {
        type: userActionType.getUserProfileSuccess,
        payload: data,
    };
};

export const actGetUserProfileFail = (error: any) => {
    return {
        type: userActionType.getUserProfileFail,
        payload: error,
    };
};

export const actAddLikedPostRequest = () => {
    return {
        type: userActionType.addLikedPostRequest,
    };
};

export const actAddLikedPostSuccess = (postId: number) => {
    return {
        type: userActionType.addLikedPostSuccess,
        payload: postId,
    };
};

export const actAddLikedPostFail = (error: any) => {
    return {
        type: userActionType.getUserProfileFail,
        payload: error,
    };
};

export const actRemoveLikedPostRequest = () => {
    return {
        type: userActionType.removeLikedPostRequest,
    };
};

export const actRemoveLikedPostSuccess = (newList: number[]) => {
    return {
        type: userActionType.removeLikedPostSuccess,
        payload: newList,
    };
};

export const actRemoveLikedPostFail = (error: any) => {
    return {
        type: userActionType.removeLikedPostFail,
        payload: error,
    };
};

export const fetchUserProfile = (service: any) => {
    return (dispatch: any) => {
        dispatch(actGetUserProfileRequest());

        const fetchBooking = async () => {
            const result = await jobApi.bookService(service);

            try {
                dispatch(actGetUserProfileSuccess(result));
            } catch (error) {
                dispatch(actGetUserProfileFail(error));
            }
        };

        fetchBooking();
    };
};
