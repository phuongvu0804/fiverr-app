//Others
import { jobApi } from '@/api';
import { callApi } from '@/api/config/errorHandling';
import { JobCategoryProps, LogErrorProps } from '@/constants/intefaces';
import { JobCategoryActionType } from '../constants/jobCategoryList';
import { ActionProps } from './types';

export const actGetJobCategoryListRequest = (): ActionProps => {
    return {
        type: JobCategoryActionType.getRequest,
    };
};

export const actGetJobCategoryListSuccess = (data: any): ActionProps => {
    return {
        type: JobCategoryActionType.getSuccess,
        payload: data,
    };
};

export const actGetJobCategoryListFail = (error: any): ActionProps => {
    return {
        type: JobCategoryActionType.getFail,
        payload: error,
    };
};

export const getJobCategoryList = (setJobCategoryData: React.Dispatch<React.SetStateAction<JobCategoryProps[]>>) => {
    return (dispatch: any) => {
        dispatch(actGetJobCategoryListRequest());

        callApi(
            jobApi.getJobCategoryList(),
            (resp: JobCategoryProps[]) => {
                dispatch(actGetJobCategoryListSuccess(resp));
                setJobCategoryData(resp);
            },
            (error: LogErrorProps) => {
                //Not display out
                dispatch(actGetJobCategoryListFail(error.customedError));
            },
        );
    };
};
