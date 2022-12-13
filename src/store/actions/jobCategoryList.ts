//Others
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

// export const getJobCategoryList = (): ThunkAction<void, RootState, unknown, AnyAction> => {
//     return (dispatch: Dispatch<any>) => {
//         dispatch(actGetJobCategoryListRequest());

//         const fetchJobCategoryList = async () => {
//             const result = await jobApi.getJobCategoryList();

//             try {
//                 actGetJobCategoryListSuccess(result);
//             } catch (error) {
//                 actGetJobCategoryListFail(error);
//             }
//         };

//         fetchJobCategoryList();
//     };
// };
