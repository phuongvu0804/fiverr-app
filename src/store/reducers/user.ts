import { signInActionType } from '../constants/signIn';
import { StateProps } from './types';

const INITIAL_STATE: StateProps = {
    loading: false,
    data: null,
    error: null,
};

const authReducer = (state: StateProps = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case signInActionType.signInRequest:
            return {
                loading: true,
                data: null,
                error: null,
            };
        case signInActionType.signInSuccess:
            return {
                loading: false,
                data: action.payload,
                error: null,
            };
        case signInActionType.signInFail:
            return {
                loading: false,
                data: null,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
