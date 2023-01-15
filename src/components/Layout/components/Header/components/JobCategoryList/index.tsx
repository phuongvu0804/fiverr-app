import React, { Fragment, useEffect, useState } from 'react';

//Others
import { getJobCategoryList } from '@/store/actions/jobCategoryList';
import './JobCategoryList.scss';
import { useAppDispatch } from '@/hooks';

//Components
import JobCategoryListTablet from './components/JobCategoryListTablet';
import JobCategoryListPC from './components/JobCategoryListPC';
import { JobCategoryProps } from '@/constants/intefaces';

const JobCategoryList = () => {
    const dispatch = useAppDispatch();
    const [jobCategoryData, setJobCategoryData] = useState<JobCategoryProps[]>([]);

    useEffect(() => {
        const controller = new AbortController();

        dispatch(getJobCategoryList(setJobCategoryData));
        return () => {
            controller.abort();
        };
    }, []);

    return (
        jobCategoryData && (
            <Fragment>
                {/* In PC screen */}
                <div className="job-category__list__wrapper">
                    <JobCategoryListPC data={jobCategoryData} />
                    {/* In tablet screen */}
                    <JobCategoryListTablet data={jobCategoryData} />
                </div>
            </Fragment>
        )
    );
};

export default JobCategoryList;
