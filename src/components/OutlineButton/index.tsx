import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

//Material UI
import { Button } from '@mui/material';

interface Props {
    className?: string;
    children: string;
    to: string;
    href: string;
    leftIcon: string;
    rightIcon: string;
    onClick: () => void;
}

interface CompPropType {
    onClick: () => void;
    href?: string;
    to?: string;
    component?: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>> | string;
}

const OutlineButton = ({ className, children, to, href, leftIcon, rightIcon, onClick, ...passedProps }: Props) => {
    const props: CompPropType = {
        onClick,
        ...passedProps,
    };

    if (to) {
        props.to = to;
        props.component = Link;
    } else if (href) {
        props.href = href;
        props.component = 'a';
    }

    return (
        <Button className={className} variant="outlined" {...props}>
            {children}
        </Button>
    );
};

export default OutlineButton;
