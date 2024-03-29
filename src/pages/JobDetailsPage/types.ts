import { PostProps } from '@/constants/intefaces';

export interface NavbarItemProps {
    name: string;
    href: string;
}

export interface SectionProps {
    data: PostProps;
}

export interface ReviewProps {
    avatar: string;
    ngayBinhLuan: string;
    noiDung: string;
    saoBinhLuan: number;
    tenNguoiBinhLuan: string;
}

export interface AddInfoProps {
    icon: JSX.Element;
    content: string;
}
