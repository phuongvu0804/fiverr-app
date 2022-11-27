import React from 'react';
import Banner from './components/Banner';
import CategoryList from './components/CategoryList';
import SellingPropo from './components/SellingPropo';
import ServiceList from './components/ServiceList';
import Testimonial from './components/Testimonial';

const Home = () => {
    return (
        <div id="home">
            <Banner />
            <ServiceList />
            <SellingPropo />
            <Testimonial />
            <CategoryList />
        </div>
    );
};

export default Home;
