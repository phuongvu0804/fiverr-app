import { Button, ButtonBase } from '@mui/material';
import React from 'react';

//Material UI

import './TextButton.scss';

interface Props {
    className: string;
    children: string;
}

const TextButton = ({ className, children }: Props) => {
    return <Button className={className}>{children}</Button>;
};

export default TextButton;
