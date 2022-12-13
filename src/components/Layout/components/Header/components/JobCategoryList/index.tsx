import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

//Others
import { JobCategoryProps } from '@/constants/intefaces';
import { jobApi } from '@/api';
import {
    actGetJobCategoryListFail,
    actGetJobCategoryListRequest,
    actGetJobCategoryListSuccess,
} from '@/store/actions/jobCategoryList';
import './JobCategoryList.scss';
import { useAppDispatch } from '@/hooks';

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
        <div className="job-category__list__wrapper hide-on-mobile">
            <ul className="job-category__list container-center">
                {jobCategoryData?.map((item: JobCategoryProps, index: number) => (
                    <li key={index} className="job-category__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'job-category__link active' : 'job-category__link'
                            }
                            to={`/job-list/${item.id}`}
                        >
                            {item.tenLoaiCongViec}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobCategoryList;
