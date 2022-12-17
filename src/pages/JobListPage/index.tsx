import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import FilterRadioInput from './components/FilterRadioInput';
import { CategoryJobFilter, PriceJobFilter, SellerRateFilter } from './components/HOCJobFilter';
import JobList from './components/JobList';
import PaginationMUI from './components/Pagination';

//Others
import './JobList.scss';
import { PriceData, sellerFilterList, SellerRateData } from './constants';
import { jobApi } from '@/api';

const JobListPage = () => {
    //Get params from URLs
    let { id } = useParams();
    const [postList, setPostList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const postListLength = postList.length;

    const searchedValue: string = id !== undefined ? id : '';

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);
    const totalPage = Math.ceil(postListLength / postsPerPage);

    const fetchPosts = async (searchedValue: string) => {
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
        fetchPosts(searchedValue);
    }, []);

    //Set current page
    const paginate = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div id="job-list" className="container-center">
            <h3 className="job-list__title">Results for "{searchedValue}"</h3>
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
                <JobList loading={loading} data={currentPosts} postsPerPage={postsPerPage} />
            </div>
            <PaginationMUI currentPage={currentPage} totalPage={totalPage} paginate={paginate} />
        </div>
    );
};

export default JobListPage;
