import { MUIAlertProps } from '@/constants/intefaces';
import { AlertTypes } from '../constants/alert';

export const actCloseAlert = () => {
    return {
        type: AlertTypes.close,
    };
};

export const actOpenAlert = (data: MUIAlertProps) => {
    return {
        type: AlertTypes.open,
        data,
    };
};
