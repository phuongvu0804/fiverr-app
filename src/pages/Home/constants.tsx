import images from '@/assets/images';
import { BgItemType, SellingPropoProps, ServiceProps, TrustedListProps } from './interfaces';

export const bgList: BgItemType[] = [
    {
        name: 'Andrea',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--andrea', 'active'],
    },
    {
        name: 'Moon',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--moon'],
    },
    {
        name: 'Ritika',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--ritika'],
    },
    {
        name: 'Zach',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--zach'],
    },
    {
        name: 'Gabrielle',
        job: 'Fashion Degisner',
        className: ['home__bg-item', 'home__bg-item--gabrielle'],
    },
];

export const trustedListData: TrustedListProps[] = [
    {
        name: 'facebook',
        img: images.facebookLogo,
    },
    {
        name: 'google',
        img: images.googleLogo,
    },
    {
        name: 'netflix',
        img: images.netflixLogo,
    },
    {
        name: 'pandg',
        img: images.pandgLogo,
    },
    {
        name: 'paypal',
        img: images.paypalLogo,
    },
];

export const serviceListData: ServiceProps[] = [
    {
        name: 'Logo Design',
        slogan: 'Build your brand',
        img: images.serviceBg1,
    },
    {
        name: 'WordPress',
        slogan: 'Customize your site',
        img: images.serviceBg2,
    },
    {
        name: 'Voice Over',
        slogan: 'Share your message',
        img: images.serviceBg3,
    },
    {
        name: 'Video Explainer',
        slogan: 'Engage your audience',
        img: images.serviceBg4,
    },
    {
        name: 'Social Media',
        slogan: 'Reach more customers',
        img: images.serviceBg5,
    },
    {
        name: 'SEO',
        slogan: 'Unlock growth online',
        img: images.serviceBg6,
    },
    {
        name: 'Illustration',
        slogan: 'Color your dreams',
        img: images.serviceBg7,
    },
    {
        name: 'Translation',
        slogan: 'Go global',
        img: images.serviceBg8,
    },
    {
        name: 'Data entry',
        slogan: 'Learn your business',
        img: images.serviceBg9,
    },
    {
        name: 'Book cover',
        slogan: 'Showcase your study',
        img: images.serviceBg10,
    },
];

export const sellingPropoData: SellingPropoProps = {
    title: 'A whole world of freelance talent at your fingertips',
    image: images.sellingVidCover,
    video: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw',
    content: [
        {
            name: 'The best for every budget',
            content: 'Find the right freelancer to begin working on your project within minutes.',
        },
        {
            name: 'Quality work done quickly',
            content: "Always know what you'll pay upfront. Your payment isn'\t released until you approve the work.",
        },
        {
            name: 'Protected payments, every time',
            content: 'Find high-quality services at every price point. No hourly rates, just project-based pricing.',
        },
        {
            name: '24/7 support',
            content: 'Questions? Our round-the-clock support team is available to help anytime, anywhere.',
        },
    ],
};
