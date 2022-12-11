import React from 'react';

//Material UI
import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Popover } from '@mui/material';

//Others
import { JobFilterDataProps } from '../../interfaces';

const WithJobFilter = (Component: ({ data }: { data: any }) => JSX.Element) => {
    return function HOCJobFilter({ data }: { data: JobFilterDataProps }) {
        const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        const open = Boolean(anchorEl);

        return (
            <div className="job-list__filter-item">
                <Button className="job-list__filter-btn" onClick={handleClick} endIcon={<KeyboardArrowDown />}>
                    {data.name}
                </Button>
                <Popover
                    className="job-list__filter-menu"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Component data={data} />
                </Popover>
            </div>
        );
    };
};

export default WithJobFilter;
