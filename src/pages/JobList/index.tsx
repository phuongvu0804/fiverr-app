import React, { useEffect, useState } from 'react';

//Material UI
import { Grid, Pagination, Skeleton } from '@mui/material';

//Others
import './JobList.scss';
import JobItem from './components/JobItem';
import { CategoryJobFilter, PriceJobFilter, SellerRateFilter } from './components/HOCJobFilter';
import { PriceData, sellerFilterList, SellerRateData } from './constants';
import FilterRadioInput from './components/FilterRadioInput';
import { jobApi } from '@/api';
import { useParams } from 'react-router-dom';
import { PostProps } from './types';
import JobItemSkeleton from './components/JobItemSkeleton';

const JobList = () => {
    //Get params from URLs
    let { id } = useParams();
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);

    const postListLength = postList.length;

    const searchedValue: string = id !== undefined ? id : '';

    const renderPostList = () => {
        if (loading) {
            const loadingArray = Array.apply(null, Array(12));

            return loadingArray.map((item, index) => <JobItemSkeleton key={index} />);
        } else {
            return postList.map((item: PostProps, index: number) => <JobItem key={index} data={item} />);
        }
    };

    const getJobList = async (searchedValue: string) => {
        setLoading(true);
        const result = await jobApi.getJobsByName(searchedValue);
        try {
            setPostList(result.data.content);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getJobList(searchedValue);
    }, []);

    return (
        <div id="job-list" className="container-center">
            <h3 className="job-list__title">Results for "software"</h3>
            <div className="job-list__filter-wrapper">
                <div className="job-list__filter—group">
                    <CategoryJobFilter data={PriceData} />
                    <PriceJobFilter data={PriceData} />
                    <SellerRateFilter data={SellerRateData} />
                </div>
                <div className="job-list__filter—group">
                    {sellerFilterList.map((item, index) => (
                        <FilterRadioInput key={index} label={item} />
                    ))}
                </div>
            </div>
            <div className="job-list__content">
                <span className="job-list__result">{postListLength} services available</span>
                <Grid container spacing={3} className="job-list__wrapper">
                    {renderPostList()}
                </Grid>
            </div>

            {/* Pagination on PC and tablet */}
            <Pagination
                className="job-list__pagination hide-on-mobile"
                count={10}
                size="medium"
                variant="outlined"
                shape="rounded"
            />
            {/* Pagination on mobile */}
            <Pagination
                className="job-list__pagination display-on-mobile"
                count={10}
                siblingCount={0}
                size="large"
                variant="outlined"
                shape="rounded"
            />
        </div>
    );
};

export default JobList;
