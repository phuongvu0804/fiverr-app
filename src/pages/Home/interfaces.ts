export interface BgItemType {
    name: string;
    job: string;
    className: string[];
    style?: any;
}

export interface TrustedListProps {
    name: string;
    img: any;
}

export interface ServiceProps {
    name: string;
    slogan: string;
    img: any;
}

export interface SellingContentProps {
    name: string;
    content: string;
}

export interface SellingPropoProps {
    title: string;
    image: string;
    video: string;
    content: SellingContentProps[];
}

export interface TestimonialItemProps {
    name: string;
    job: string;
    content: string;
    logo: any;
    image: any;
    video: string;
}

export interface jobCategoryProps {
    name: string;
    image: any;
}
