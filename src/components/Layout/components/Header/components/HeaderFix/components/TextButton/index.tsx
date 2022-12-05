//Material UI
import { Button } from '@mui/material';

import './TextButton.scss';

interface Props {
    className: string;
    children: string;
}

const TextButton = ({ className, children }: Props) => {
    return <Button className={className}>{children}</Button>;
};

export default TextButton;
