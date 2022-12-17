import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

//Others
import { jobApi } from '@/api';
import {
    actGetJobCategoryListFail,
    actGetJobCategoryListRequest,
    actGetJobCategoryListSuccess,
} from '@/store/actions/jobCategoryList';
import './JobCategoryList.scss';
import { useAppDispatch } from '@/hooks';

//Components
import JobCategoryListTablet from './components/JobCategoryListTablet';
import JobCategoryListPC from './components/JobCategoryListPC';

const JobCategoryList = () => {
    const dispatch = useAppDispatch();

    const [jobCategoryData, setJobCategoryData] = useState([]);

    const getJobCategoryList = () => {
        dispatch(actGetJobCategoryListRequest());

        const fetchJobCategoryList = async () => {
            const result = await jobApi.getJobCategoryList();
            try {
                dispatch(actGetJobCategoryListSuccess(result.data.content));
                setJobCategoryData(result.data.content);
            } catch (error) {
                dispatch(actGetJobCategoryListFail(error));
            }
        };

        fetchJobCategoryList();
    };

    useEffect(() => {
        // dispatch(getJobCategoryList()); error with prop type
        getJobCategoryList();
    }, []);

    return (
        <Fragment>
            {/* In PC screen */}
            <div className="job-category__list__wrapper">
                <JobCategoryListPC data={jobCategoryData} />
                {/* In tablet screen */}
                <JobCategoryListTablet data={jobCategoryData} />
            </div>
        </Fragment>
    );
};

export default JobCategoryList;
