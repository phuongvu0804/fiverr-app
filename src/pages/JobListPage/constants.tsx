import StarIcon from '@mui/icons-material/Star';
import { JobFilterDataProps, Operator } from './interfaces';

export enum PriceDataValues {
    value = 'value',
    midRange = 'mid-range',
    highEnd = 'high-end',
    custom = 'custom',
}

export const PriceData: JobFilterDataProps = {
    options: [
        {
            value: PriceDataValues.value,
            label: 'Value',
            operator: Operator.smaller,
        },
        {
            value: PriceDataValues.midRange,
            label: 'Mid-range',
            operator: Operator.range,
        },
        {
            value: PriceDataValues.highEnd,
            label: 'High-end',
            operator: Operator.bigger,
        },
        {
            value: 'custom',
            label: 'Custom',
            operator: Operator.range,
            custom: true,
            icon: '$',
        },
    ],
};

export const SellerRateData: JobFilterDataProps = {
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
