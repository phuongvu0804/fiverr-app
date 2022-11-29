//Components
import SearchField from '@/components/SearchField';
import { Button } from '@mui/material';

//Others
import './Banner.scss';
import BackGroundSlick from './components/BackGroundSlick';

const Banner = () => {
    return (
        <div className="home__banner">
            <div className="home__bg-wrapper">
                <BackGroundSlick />
            </div>

            <div className="container-center">
                <div className="home__banner-content">
                    <h2 className="banner__title">
                        Find the perfect
                        <span> freelance </span>
                        services for your business
                    </h2>

                    {/* Search field for PC */}
                    <SearchField className="banner__search hide-on-tablet-mobile">Search</SearchField>

                    {/* Search field for tablet + mobile */}
                    <div className="banner__search-tablet-mobile hide-on-pc display-tablet-mobile">
                        <SearchField className="banner__search" searchBtn={false}>
                            Search
                        </SearchField>
                        <Button className="banner__search-btn" variant="contained">
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
