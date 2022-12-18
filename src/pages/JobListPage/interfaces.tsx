import { SvgIconProps } from '@mui/material';

export enum Operator {
    smaller = 'SMALLER',
    range = 'RANGE',
    bigger = 'BIGER',
    exact = 'EXACT',
}

export interface JobFilterOptionProps {
    value: string;
    label: string | any;
    subText?: string | null;
    operator: Operator;
    custom?: boolean;
    icon?: string | React.ReactElement<SvgIconProps>;
}

export interface JobFilterDataProps {
    options: JobFilterOptionProps[];
}
