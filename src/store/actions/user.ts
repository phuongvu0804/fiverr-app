//Others
import userApi from '@/api/userApi';
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

        const fetchUserData = async () => {
            const result = await userApi.getUserInfo(userId);
            try {
                dispatch(actGetUserSuccess(result.data.content));
            } catch (error) {
                dispatch(actGetUserFail(error));
            }
        };

        fetchUserData();
    };
};

export default actGetUser;
