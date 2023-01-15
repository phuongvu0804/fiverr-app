import { CustomedErrorProps } from '@/api/config/errorHandling';
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
    title: string | number;
    content: string;
}

export type TimeOutIdType = number | undefined;

export interface LogErrorProps {
    type: number;
    customedError: CustomedErrorProps;
}

export interface JobDetailsProps {
    danhGia: number;
    giaTien: number;
    hinhAnh: string;
    id: number;
    maChiTietLoaiCongViec: number;
    moTa: string;
    moTaNgan: string;
    nguoiTao: number;
    saoCongViec: number;
    tenCongViec: string;
}

export interface PostProps {
    avatar: string;
    congViec: JobDetailsProps;
    id: number;
    tenChiTietLoai: string;
    tenLoaiCongViec: string;
    tenNguoiTao: string;
    tenNhomChiTietLoai: string;
}
