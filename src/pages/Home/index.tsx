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
    bgList,
    jobCategoryList,
    sellingPropoData,
    serviceListData,
    TestimonialList,
    trustedListData,
} from './constants';

const Home = () => {
    return (
        <div id="home">
            <Banner data={bgList} />
            <TrustedList data={trustedListData} />
            <ServiceList data={serviceListData} />
            <SellingPropo data={sellingPropoData} />
            <Testimonial data={TestimonialList} />
            <CategoryList data={jobCategoryList} />
        </div>
    );
};

export default Home;
