import { Box, Grid, Skeleton } from '@mui/material';

const JobItemSkeleton = () => {
    return (
        <Grid item xs={12} sm={6} md={3} sx={{ mb: 2 }}>
            <Skeleton animation="wave" variant="rounded" sx={{ width: '100%', height: '20rem' }} />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, mb: 1 }}>
                <Skeleton animation="wave" variant="circular" sx={{ width: '2.4rem', height: '2.4rem' }} />
                <Skeleton animation="wave" variant="text" sx={{ width: '30%', height: '1.6rem', ml: 1 }} />
            </Box>
            <Skeleton animation="wave" variant="rounded" sx={{ width: '100%', height: '6rem' }} />
        </Grid>
    );
};

export default JobItemSkeleton;
