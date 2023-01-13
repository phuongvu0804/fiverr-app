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
    const [searchValue, setSearchValue] = useState('');

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
                    <SearchField className="banner__search" searchValue={searchValue} onSearchValue={setSearchValue}>
                        Search
                    </SearchField>
                </div>
            </div>
        </div>
    );
};

export default Banner;
