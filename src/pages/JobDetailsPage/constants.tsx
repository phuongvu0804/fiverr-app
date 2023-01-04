import { PostProps } from '../JobListPage/types';
import { ReviewProps } from './types';

export const NAVBAR_LIST = [
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
        giaTien: -1,
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
