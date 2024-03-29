import { JobDetailsProps, MUIAlertProps, TimeOutIdType } from '@/constants/intefaces';

export interface LearnCardDataProps {
    logo: any;
    illustration: any;
    title: string;
    desc: string;
}

export interface BookingItemProps {
    congViec: JobDetailsProps;
    hoanThanh: boolean;
    id: Number;
    ngayThue: string;
}

export interface UseAlertProps {
    openAlert: MUIAlertProps;
    onOpenAlert: React.Dispatch<React.SetStateAction<MUIAlertProps>>;
    timeOutId: TimeOutIdType;
}
