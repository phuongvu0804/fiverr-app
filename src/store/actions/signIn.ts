//Others
import userApi from '@/api/userApi';
import { signInActionType } from '../constants/signIn';
import { ActionProps } from './types';

export const actGetUserRequest = (): ActionProps => {
    return {
        type: signInActionType.signInRequest,
    };
};

export const actGetUserSuccess = (data: any): ActionProps => {
    return {
        type: signInActionType.signInSuccess,
        payload: data,
    };
};

export const actGetUserFail = (error: any): ActionProps => {
    return {
        type: signInActionType.signInFail,
        payload: error,
    };
};

export const actSignIn = (userInfo: any) => {
    return (dispatch: any) => {
        dispatch(actGetUserRequest());

        const fetchUserSignIn = async () => {
            const result = await userApi.getUserInfo(userInfo);

            try {
                dispatch(actGetUserSuccess(result.data.content));
            } catch (error) {
                dispatch(actGetUserFail(error));
            }
        };

        fetchUserSignIn();
    };
};
