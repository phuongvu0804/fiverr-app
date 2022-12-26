//Material UI
import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';

//Others
import { SectionProps } from '../../types';
import './MUIBreadCrumbs.scss';

const MUIBreadCrumbs = ({ data }: SectionProps) => {
    return (
        <div className="container-center">
            <Stack className="job-details__bread-crumb" spacing={2}>
                <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                    <Link className="bread-crumb__item" underline="hover" color="inherit" href="/">
                        {data.tenLoaiCongViec}
                    </Link>

                    <Link
                        className="bread-crumb__item"
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        {data.tenNhomChiTietLoai}
                    </Link>

                    <Typography className="bread-crumb__item bread-crumb__item--active" color="text.primary">
                        {data.tenChiTietLoai}
                    </Typography>
                </Breadcrumbs>
            </Stack>
        </div>
    );
};

export default MUIBreadCrumbs;
