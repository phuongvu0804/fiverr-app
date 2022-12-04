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
