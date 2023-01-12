import { MUI_ALERT_INIT_STATE } from '@/constants/constants';
import { MUIAlertProps, TimeOutIdType } from '@/constants/intefaces';
import { AlertTypes } from '../constants/alert';

interface Props {
    type: AlertTypes;
    data: MUIAlertProps | TimeOutIdType;
}
const INITIAL_STATE: Props = {
    type: AlertTypes.close,
    data: MUI_ALERT_INIT_STATE,
};

const alertReducer = (state: Props = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case AlertTypes.close:
            return {
                ...state,
                type: AlertTypes.close,
            };
        case AlertTypes.open: {
            return {
                ...state,
                type: AlertTypes.open,
                data: action.data,
            };
        }
        default:
            return { ...state };
    }
};

export default alertReducer;
