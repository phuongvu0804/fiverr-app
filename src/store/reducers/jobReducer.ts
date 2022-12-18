import { ActionProps } from '../actions/types';
import { JobCategoryActionType } from '../constants/jobCategoryList';
import { StateProps } from './types';

const initialState: StateProps = {
    loading: false,
    data: null,
    error: null,
};

const jobCategoryReducer = (state: StateProps = initialState, action: ActionProps) => {
    switch (action.type) {
        case JobCategoryActionType.getRequest:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case JobCategoryActionType.getSuccess:
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case JobCategoryActionType.getFail:
            return {
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default jobCategoryReducer;
