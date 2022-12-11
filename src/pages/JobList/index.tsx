import React from 'react';

//Material UI
import { Grid, Pagination } from '@mui/material';

//Others
import './JobList.scss';
import JobItem from './components/JobItem';
import { CategoryJobFilter, PriceJobFilter, SellerRateFilter } from './components/HOCJobFilter';
import { PriceData, sellerFilterList, SellerRateData } from './constants';
import FilterRadioInput from './components/FilterRadioInput';

const JobList = () => {
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
                <span className="job-list__result">8,186 services available</span>
                <Grid container spacing={3} className="job-list__wrapper">
                    <JobItem />
                    <JobItem />
                    <JobItem />
                    <JobItem />
                </Grid>
            </div>
            <Pagination
                className="job-list__pagination hide-on-mobile"
                count={10}
                size="medium"
                variant="outlined"
                shape="rounded"
            />

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
