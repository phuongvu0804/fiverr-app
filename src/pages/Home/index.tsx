import React from 'react';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import SellingPropo from './components/SellingPropo';
import ServiceList from './components/ServiceList';
import Testimonial from './components/Testimonial';
import TrustedList from './components/TrustedList';

const Home = () => {
    return (
        <div id="home">
            <Banner />
            <TrustedList />
            <ServiceList />
            <SellingPropo />
            <Testimonial />
            <CategoryList />
        </div>
    );
};

export default Home;
