import { AlertColor } from '@mui/material';

export interface ButtonType {
    name: string;
    href?: string | null;
    to?: string | null;
    onClick?: () => void;
}

export interface IconButtonType extends ButtonType {
    icon: JSX.Element;
}

export interface TextButtonType extends ButtonType {
    content: string;
}

export interface TextIconButtonType extends ButtonType {
    content?: string;
    icon?: JSX.Element;
}

export interface ButtonPropType {
    href?: string;
    to?: string;
    onClick?: () => void;
}

//Job Category Filter
export interface JobNameListProps {
    id: number;
    name: string;
}

export interface SubCategoryProps {
    dsChiTietLoai: JobNameListProps[];
    hinhAnh: string;
    id: number;
    maLoaiCongviec: number;
    tenNhom: string;
}

export interface JobCategoryProps {
    dsNhomChiTietLoai: SubCategoryProps[];
    id: number;
    tenLoaiCongViec: string;
}

export interface UserDataProps {
    avatar: string;
    birthday: string;
    bookingJob: [];
    certification: [];
    email: string;
    gender: boolean;
    id: number;
    name: string;
    password: string;
    phone: string;
    role: string;
    skill: [];
}

export interface UserDataTokenProps {
    token: string;
    user: UserDataProps;
}

export interface MUIAlertProps {
    state: boolean;
    type: AlertColor | undefined;
    title: string;
    content: string;
}
