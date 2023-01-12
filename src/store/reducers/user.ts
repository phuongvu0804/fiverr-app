import { getUserDataActionType } from '../constants/user';
import { StateProps } from './types';

const INITIAL_STATE: StateProps = {
    loading: false,
    data: null,
    error: null,
};

const userReducer = (state: StateProps = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case getUserDataActionType.getUserDataRequest:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case getUserDataActionType.getUserDataSuccess:
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case getUserDataActionType.getUserDataFail:
            return {
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
