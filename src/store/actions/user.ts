//Others
import { callApi } from '@/api/config/errorHandling';
import userApi from '@/api/userApi';
import { LogErrorProps, UserDataProps } from '@/constants/intefaces';
import { getUserDataActionType } from '../constants/user';
import { ActionProps } from './types';

export const actGetUserRequest = (): ActionProps => {
    return {
        type: getUserDataActionType.getUserDataRequest,
    };
};

export const actGetUserSuccess = (data: any): ActionProps => {
    return {
        type: getUserDataActionType.getUserDataSuccess,
        payload: data,
    };
};

export const actGetUserFail = (error: any): ActionProps => {
    return {
        type: getUserDataActionType.getUserDataFail,
        payload: error,
    };
};

const actGetUser = (userId: number) => {
    return (dispatch: any) => {
        dispatch(actGetUserRequest());

        callApi(
            userApi.getUserInfo(userId),
            (response: UserDataProps) => {
                dispatch(actGetUserSuccess(response));
            },
            (error: LogErrorProps) => dispatch(actGetUserFail(error)),
        );
    };
};

export default actGetUser;
