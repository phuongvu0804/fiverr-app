import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Components
import SearchField from '@/components/SearchField';
import { Button } from '@mui/material';
import { BgItemType } from '../../interfaces';

//Others
import './Banner.scss';
import BackGroundSlick from './components/BackGroundSlick';

const Banner = ({ data }: { data: BgItemType[] }) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    const handleSubmitSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (searchValue !== '') {
            navigate(`/job-list/${searchValue}`);
        }
    };

    return (
        <div className="home__banner">
            <div className="home__bg-wrapper">
                <BackGroundSlick data={data} />
            </div>

            <div className="container-center">
                <div className="home__banner-content">
                    <h2 className="banner__title">
                        Find the perfect
                        <span> freelance </span>
                        services for your business
                    </h2>

                    {/* Search field for PC */}
                    <SearchField
                        className="banner__search hide-on-tablet-mobile"
                        searchValue={searchValue}
                        onSearchValue={setSearchValue}
                    >
                        Search
                    </SearchField>

                    {/* Search field for tablet + mobile */}
                    <div className="banner__search-tablet-mobile hide-on-pc display-tablet-mobile">
                        <SearchField
                            className="banner__search"
                            searchBtn={false}
                            searchValue={searchValue}
                            onSearchValue={setSearchValue}
                        >
                            Search
                        </SearchField>
                        <Button className="banner__search-btn" variant="contained" onClick={handleSubmitSearch}>
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
