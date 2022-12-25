import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

//Others
import './MUIBreadCrumbs.scss';

const MUIBreadCrumbs = () => {
    return (
        <Stack className="job-details__bread-crumb" spacing={2}>
            <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Link className="bread-crumb__item" underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    className="bread-crumb__item"
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography className="bread-crumb__item bread-crumb__item--active" color="text.primary">
                    Breadcrumb
                </Typography>
            </Breadcrumbs>
        </Stack>
    );
};

export default MUIBreadCrumbs;
