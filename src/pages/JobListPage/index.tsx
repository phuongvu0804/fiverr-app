import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import FilterRadioInput from './components/FilterRadioInput';
import { CategoryJobFilter, PriceJobFilter, SellerRateFilter } from './components/HOCJobFilter';
import JobList from './components/JobList';
import PaginationMUI from './components/Pagination';

//Others
import './JobList.scss';
import { PriceData, PriceDataValues, sellerFilterList, SellerRateData } from './constants';
import { jobApi } from '@/api';
import { useAppSelector } from '@/hooks';
import { PostProps } from './types';

const JobListPage = () => {
    //Get params from URLs
    let { id } = useParams();
    const jobCategory = useAppSelector((state) => state.jobCategory['data']);

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const postListLength = filteredData.length;

    const searchedValue: string = id !== undefined ? id : '';

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredData.slice(indexOfFirstPost, indexOfLastPost);
    const totalPage = Math.ceil(postListLength / postsPerPage);

    //Fetch data of list of jobs
    useEffect(() => {
        const controller = new AbortController();
        const fetchPosts = async (searchedValue: string) => {
            setLoading(true);
            const result = await jobApi.getJobsByName(searchedValue);
            try {
                setData(result.data.content);
                setFilteredData(result.data.content);

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchPosts(searchedValue);

        return () => {
            controller.abort();
        };
    }, []);

    //Get liked posts from local storage
    useEffect(() => {
        const likedPostsData = localStorage.getItem('fiverLikedPosts');
        if (likedPostsData) {
            const parsedLikedPostsData = JSON.parse(likedPostsData);
            parsedLikedPostsData && setLikedPosts(parsedLikedPostsData!);
        }
    }, []);

    //Set current page
    const paginate = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const onFilterCategory = (value: any) => {
        //Filter data by job category
        const filteredPostList = data.filter((item: any) => {
            if (item.tenLoaiCongViec === value) {
                return item;
            }
        });

        setFilteredData(filteredPostList);
    };

    const handleMinMax = (a: number, b: number) => {
        if (a < b) {
            return { minValue: a, maxValue: b };
        } else if (a > b) {
            return { minValue: b, maxValue: a };
        } else {
            return { minValue: a, maxValue: a };
        }
    };

    const onFilterPrice = ({ option, min, max }: { option: string; min?: number; max?: number }) => {
        let filteredPostList = [...data];
        switch (option) {
            case PriceDataValues.value:
                filteredPostList = data.filter((item: any) => {
                    return item.congViec.giaTien < 10;
                });
                break;
            case PriceDataValues.midRange:
                filteredPostList = data.filter((item: any) => {
                    return item.congViec.giaTien > 10 && item.congViec.giaTien < 21;
                });
                break;
            case PriceDataValues.highEnd:
                filteredPostList = data.filter((item: any) => {
                    return item.congViec.giaTien >= 21;
                });
                break;
            case PriceDataValues.custom:
                if (min && max) {
                    const { minValue, maxValue } = handleMinMax(min, max);
                    filteredPostList = data.filter((item: any) => {
                        return item.congViec.giaTien >= minValue && item.congViec.giaTien <= maxValue;
                    });
                }
                break;
            default:
                return setFilteredData(filteredPostList);
        }

        setFilteredData(filteredPostList);
    };

    const onFilterSeller = ({ option, min, max }: { option: string; min: number; max: number }) => {
        const selectedValue = Number(option);
        const filteredPostList = data.filter((item: PostProps) => {
            switch (option) {
                case '0':
                    return item;
                case 'custom':
                    const { minValue, maxValue } = handleMinMax(min, max);
                    return item.congViec.saoCongViec >= minValue && item.congViec.saoCongViec <= maxValue;
                default:
                    return item.congViec.saoCongViec === selectedValue;
            }
        });

        setFilteredData(filteredPostList);
    };

    return (
        <div id="job-list" className="container-center padding-top-page">
            <h3 className="job-list__title">Results for "{searchedValue}"</h3>
            <div className="job-list__filter-wrapper">
                <div className="job-list__filter—group">
                    <CategoryJobFilter data={jobCategory} name="Category" onFilter={onFilterCategory} />
                    <PriceJobFilter data={PriceData} name="Budget" onFilter={onFilterPrice} />
                    <SellerRateFilter data={SellerRateData} name="Seller rate" onFilter={onFilterSeller} />
                </div>
                <div className="job-list__filter—group">
                    {sellerFilterList.map((item, index) => (
                        <FilterRadioInput key={index} label={item} />
                    ))}
                </div>
            </div>
            <div className="job-list__content">
                <span className="job-list__result">{postListLength} services available</span>
                <JobList loading={loading} data={currentPosts} postsPerPage={postsPerPage} likedPosts={likedPosts} />
            </div>
            <PaginationMUI currentPage={currentPage} totalPage={totalPage} paginate={paginate} />
        </div>
    );
};

export default JobListPage;
