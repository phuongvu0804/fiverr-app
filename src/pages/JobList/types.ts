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
