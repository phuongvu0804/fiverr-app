import images from '@/assets/images';

interface TrustedListProps {
    name: string;
    img: any;
}

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
