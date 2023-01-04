export enum NotiTypes {
    INFOR = 'info',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface NotiDialogProps {
    type: NotiTypes;
    title: string;
    content: string;
}

export const initDialogValue: NotiDialogProps = {
    type: NotiTypes.SUCCESS,
    title: 'Success',
    content: 'Congratulations! You have successfully created an account',
};
