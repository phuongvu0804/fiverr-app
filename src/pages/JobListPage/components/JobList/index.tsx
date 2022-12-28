import { Grid } from '@mui/material';
import { PostProps } from '../../types';
import JobItem from '../JobItem';
import JobItemSkeleton from '../JobItemSkeleton';

interface Props {
    loading: boolean;
    data: PostProps[];
    likedPosts: number[];
    postsPerPage: number;
}

const JobList = ({ loading, data, likedPosts, postsPerPage }: Props) => {
    const renderPostList = () => {
        if (loading) {
            const loadingArray = Array.apply(null, Array(postsPerPage));

            return loadingArray.map((item, index) => <JobItemSkeleton key={index} />);
        } else {
            return data.map((item: PostProps, index: number) => (
                <JobItem key={index} data={item} likedPosts={likedPosts} />
            ));
        }
    };

    return (
        <Grid container spacing={3} className="job-list__wrapper">
            {renderPostList()}
        </Grid>
    );
};

export default JobList;
