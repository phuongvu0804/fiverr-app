import { MUIAlertProps, PostProps } from '@/constants/intefaces';
import { AccessTime, Autorenew } from '@mui/icons-material';
import { AddInfoProps, NavbarItemProps, ReviewProps } from './types';

export const NAVBAR_LIST: NavbarItemProps[] = [
    {
        name: 'Overview',
        href: 'overview',
    },
    {
        name: 'Description',
        href: 'description',
    },
    {
        name: 'About the seller',
        href: 'seller',
    },
    {
        name: 'Price',
        href: 'price',
    },
    {
        name: 'Reviews',
        href: 'reviews',
    },
];

export const INIT_POST_DATA: PostProps = {
    avatar: '',
    congViec: {
        danhGia: 0,
        giaTien: 0,
        hinhAnh: '',
        id: -1,
        maChiTietLoaiCongViec: -1,
        moTa: '',
        moTaNgan: '',
        nguoiTao: -1,
        saoCongViec: 0,
        tenCongViec: '',
    },
    id: 0,
    tenChiTietLoai: '',
    tenLoaiCongViec: '',
    tenNguoiTao: '',
    tenNhomChiTietLoai: '',
};

export const INIT_REVIEW_DATA: ReviewProps[] = [
    {
        avatar: '',
        ngayBinhLuan: '',
        noiDung: '',
        saoBinhLuan: 0,
        tenNguoiBinhLuan: '',
    },
];

export const SUCCESS_BOOKING_ALERT: MUIAlertProps = {
    state: true,
    type: 'success',
    title: 'Success',
    content: 'Congratulations, you have successfully booked the service',
};

export const FAIL_BOOKING_ALERT: MUIAlertProps = {
    state: true,
    type: 'error',
    title: 'Error',
    content: 'Oops! Something went wrong, you cannot book this service at this time. Please try again later!',
};

export const ADDITIONAL_INFO: AddInfoProps[] = [
    {
        icon: <AccessTime />,
        content: '2 Days Delivery',
    },
    {
        icon: <Autorenew />,
        content: '7 Revisions',
    },
];
