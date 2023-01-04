//Material UI
import { IconButtonType, TextIconButtonType } from '@/constants/intefaces';
import { CurrencyExchange, Facebook, Instagram, Language, LinkedIn, Pinterest, Twitter } from '@mui/icons-material';

export interface ColumnItemType {
    title: string;
    href: string;
}

export interface ColumnType {
    title: string;
    children: ColumnItemType[];
}

export const COLUMNS: ColumnType[] = [
    {
        title: 'Categories',
        children: [
            {
                title: 'Graphics & Design',
                href: '/',
            },
            {
                title: 'Digital Marketing',
                href: '/',
            },
            {
                title: 'Writing & Translation',
                href: '/',
            },
            {
                title: 'Video & Animation',
                href: '/',
            },
            {
                title: 'Music & Audio',
                href: '/',
            },
            {
                title: 'Programming & Tech',
                href: '/',
            },
            {
                title: 'Data',
                href: '/',
            },
            {
                title: 'Business',
                href: '/',
            },
            {
                title: 'Lifestyle',
                href: '/',
            },
            {
                title: 'Photography',
                href: '/',
            },
            {
                title: 'Sitemap',
                href: '/',
            },
        ],
    },
    {
        title: 'About',
        children: [
            {
                title: 'Careers',
                href: '/',
            },
            {
                title: 'Press & News',
                href: '/',
            },
            {
                title: 'Partnerships',
                href: '/',
            },
            {
                title: 'Privacy Policy',
                href: '/',
            },
            {
                title: 'Terms of Service',
                href: '/',
            },
            {
                title: 'Intellectual Property Claims',
                href: '/',
            },
            {
                title: 'Investor Relations',
                href: '/',
            },
        ],
    },
    {
        title: 'Support',
        children: [
            {
                title: 'Help & Support',
                href: '/',
            },
            {
                title: 'Trust & Safety',
                href: '/',
            },
            {
                title: 'Selling on Fiverr',
                href: '/',
            },
            {
                title: 'Buying on Fiverr',
                href: '/',
            },
        ],
    },
    {
        title: 'Community',
        children: [
            {
                title: 'Events',
                href: '/',
            },
            {
                title: 'Blog',
                href: '/',
            },
            {
                title: 'Forum',
                href: '/',
            },
            {
                title: 'Community Standards',
                href: '/',
            },
            {
                title: 'Podcast',
                href: '/',
            },
            {
                title: 'Influencers',
                href: '/',
            },
            {
                title: 'Affiliates',
                href: '/',
            },
            {
                title: 'Invite a Friend',
                href: '/',
            },
            {
                title: 'Become a Seller',
                href: '/',
            },
        ],
    },
    {
        title: 'More From Fiverr',
        children: [
            {
                title: 'Fiverr Business',
                href: '/',
            },
            {
                title: 'Fiverr Pro',
                href: '/',
            },
            {
                title: 'Fiverr Studios',
                href: '/',
            },
            {
                title: 'Fiverr Logo Maker',
                href: '/',
            },
            {
                title: 'Fiverr Guides',
                href: '/',
            },
            {
                title: 'Get Inspired',
                href: '/',
            },
            {
                title: 'Fiverr Select',
                href: '/',
            },
            {
                title: 'ClearVoice',
                href: '/',
            },
            {
                title: 'Fiverr Workspace',
                href: '/',
            },
            {
                title: 'Learn',
                href: '/',
            },
            {
                title: 'Working Not Working',
                href: '/',
            },
        ],
    },
];

export const SOCIAL_LIST: IconButtonType[] = [
    {
        name: 'Twitter',
        icon: <Twitter />,
        href: '/',
    },
    {
        name: 'Facebook',
        icon: <Facebook />,
        href: '/',
    },
    {
        name: 'LinkedIn',
        icon: <LinkedIn />,
        href: '/',
    },
    {
        name: 'Pinterest',
        icon: <Pinterest />,
        href: '/',
    },
    {
        name: 'Instagram',
        icon: <Instagram />,
        href: '/',
    },
];

export const SETTING_LIST: TextIconButtonType[] = [
    {
        name: 'Language setting',
        icon: <Language />,
        content: 'Language',
        href: null,
    },
    {
        name: 'Currency setting',
        icon: <CurrencyExchange />,
        content: 'Currency',
        href: null,
    },
];
