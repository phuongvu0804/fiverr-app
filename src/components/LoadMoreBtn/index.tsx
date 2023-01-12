import { Button } from '@mui/material';
import React from 'react';

interface Props {
    children: string;
    className?: string;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    setVisible: React.Dispatch<React.SetStateAction<number>>;
    visibleNumber: number;
}

const LoadMoreBtn = ({
    children = 'Load more',
    className,
    leftIcon,
    rightIcon,
    setVisible,
    visibleNumber,
    ...others
}: Props) => {
    const handleLoadMore = () => {
        setVisible((prev: number) => prev + visibleNumber);
    };
    return (
        <Button className={className} onClick={handleLoadMore} {...others}>
            {leftIcon && leftIcon}
            {children}
            {rightIcon && rightIcon}
        </Button>
    );
};

export default LoadMoreBtn;
