import StarIcon from '@mui/icons-material/Star';
import { JobFilterDataProps, Operator } from './interfaces';

export const PriceData: JobFilterDataProps = {
    name: 'Category',
    options: [
        {
            value: '314',
            label: 'Value',
            subText: 'Under €315',
            operator: Operator.smaller,
        },
        {
            value: '315-1100',
            label: 'Mid-range',
            subText: '€315- €1,101',
            operator: Operator.range,
        },
        {
            value: '1101',
            label: 'High-end',
            subText: '€1,101 and above',
            operator: Operator.bigger,
        },
        {
            value: 'custom',
            label: 'Custom',
            subText: null,
            operator: Operator.range,
            custom: true,
            icon: '$',
        },
    ],
};

export const SellerRateData: JobFilterDataProps = {
    name: 'Seller Rate',
    options: [
        {
            value: '1',
            label: StarIcon,
            operator: Operator.exact,
        },
        {
            value: '2',
            label: StarIcon,
            operator: Operator.exact,
        },
        {
            value: '3',
            label: StarIcon,
            operator: Operator.exact,
        },
        {
            value: '4',
            label: StarIcon,
            operator: Operator.exact,
        },
        {
            value: '5',
            label: StarIcon,
            operator: Operator.exact,
        },
    ],
};

export const sellerFilterList: string[] = ['Pro services', 'Local sellers', 'Online sellers'];
