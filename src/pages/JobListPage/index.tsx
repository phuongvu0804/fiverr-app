import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Components
import FilterRadioInput from './components/FilterRadioInput';
import { CategoryJobFilter, PriceJobFilter, SellerRateFilter } from './components/HOCJobFilter';
import JobList from './components/JobList';
import PaginationMUI from './components/Pagination';

//Others
import './JobList.scss';
import { PRICE_DATA, PriceDataValues, SELLER_FILTER_LIST, SELLER_RATE_DATA } from './constants';
import { jobApi } from '@/api';
import { useAppSelector } from '@/hooks';
import { PostProps } from './types';

const JobListPage = () => {
    //Get params from URLs
    let { id } = useParams();
    const JOB_CATEGORY = useAppSelector((state) => state.jobCategory['data']);

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    const [likedPosts, setLikedPosts] = useState<number[]>([]);

    const POST_LIST_LENGTH = filteredData?.length;

    const SEARCHED_VALUE: string = id !== undefined ? id : '';

    //Get current posts
    const INDEX_OF_LAST_POST = currentPage * postsPerPage;
    const INDEX_OF_FIRST_POST = INDEX_OF_LAST_POST - postsPerPage;
    const CURRENT_POSTS = filteredData?.slice(INDEX_OF_FIRST_POST, INDEX_OF_LAST_POST);
    const TOTAL_PAGE = Math.ceil(POST_LIST_LENGTH / postsPerPage);

    //Fetch data of list of jobs
    useEffect(() => {
        const controller = new AbortController();
        const fetchPosts = async (SEARCHED_VALUE: string) => {
            setLoading(true);
            const result = await jobApi.getJobsByName(SEARCHED_VALUE);

            try {
                setData(result.data.content);
                setFilteredData(result.data.content);

                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchPosts(SEARCHED_VALUE);

        return () => {
            controller.abort();
        };
    }, []);

    //Get liked posts from local storage
    useEffect(() => {
        const LIKED_POST_DATA = localStorage.getItem('fiverLikedPosts');
        if (LIKED_POST_DATA) {
            const PARSED_LIKED_POST_DATA = JSON.parse(LIKED_POST_DATA);
            PARSED_LIKED_POST_DATA && setLikedPosts(PARSED_LIKED_POST_DATA!);
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
        const SELECTED_VALUE = Number(option);
        const filteredPostList = data.filter((item: PostProps) => {
            switch (option) {
                case '0':
                    return item;
                case 'custom':
                    const { minValue, maxValue } = handleMinMax(min, max);
                    return item.congViec.saoCongViec >= minValue && item.congViec.saoCongViec <= maxValue;
                default:
                    return item.congViec.saoCongViec === SELECTED_VALUE;
            }
        });

        setFilteredData(filteredPostList);
    };

    return (
        <div id="job-list" className="container-center padding-top-page">
            <h3 className="job-list__title">Results for "{SEARCHED_VALUE}"</h3>
            <div className="job-list__filter-wrapper">
                <div className="job-list__filter—group">
                    <CategoryJobFilter data={JOB_CATEGORY} name="Category" onFilter={onFilterCategory} />
                    <PriceJobFilter data={PRICE_DATA} name="Budget" onFilter={onFilterPrice} />
                    <SellerRateFilter data={SELLER_RATE_DATA} name="Seller rate" onFilter={onFilterSeller} />
                </div>
                <div className="job-list__filter—group">
                    {SELLER_FILTER_LIST.map((item, index) => (
                        <FilterRadioInput key={index} label={item} />
                    ))}
                </div>
            </div>
            <div className="job-list__content">
                <span className="job-list__result">{POST_LIST_LENGTH} services available</span>
                <JobList loading={loading} data={CURRENT_POSTS} postsPerPage={postsPerPage} likedPosts={likedPosts} />
            </div>
            <PaginationMUI currentPage={currentPage} totalPage={TOTAL_PAGE} paginate={paginate} />
        </div>
    );
};

export default JobListPage;
