import React from 'react';

//Components
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import SellingPropo from './components/SellingPropo';
import ServiceList from './components/ServiceList';
import Testimonial from './components/Testimonial';
import TrustedList from './components/TrustedList';

//Data
import {
    BG_LIST,
    JOB_CATEGORY_LIST,
    SELLING_PROPO_DATA,
    SERVICE_LIST_DATA,
    TESTIMONIAL_LIST,
    TRUSTED_LIST_DATA,
} from './constants';

const Home = () => {
    return (
        <div id="home">
            <Banner data={BG_LIST} />
            <TrustedList data={TRUSTED_LIST_DATA} />
            <ServiceList data={SERVICE_LIST_DATA} />
            <SellingPropo data={SELLING_PROPO_DATA} />
            <Testimonial data={TESTIMONIAL_LIST} />
            <CategoryList data={JOB_CATEGORY_LIST} />
        </div>
    );
};

export default Home;
