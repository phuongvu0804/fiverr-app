//Material UI
import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Skeleton } from '@mui/material';
import { Stack } from '@mui/system';

//Others
import './MUIBreadCrumbsSkeleton.scss';

const MUIBreadCrumbsSkeleton = () => {
    const renderSections = () => {
        const array = Array.apply(null, Array(3));

        return array.map((item, index) => <Skeleton key={index} variant="text" sx={{ fontSize: '16px' }} width={60} />);
    };

    return (
        <div className="container-center job-details__bread-crumb-wrapper">
            <Stack className="job-details__bread-crumb" spacing={2}>
                <Breadcrumbs separator={<NavigateNext fontSize="small" />}>{renderSections()}</Breadcrumbs>
            </Stack>
        </div>
    );
};

export default MUIBreadCrumbsSkeleton;
