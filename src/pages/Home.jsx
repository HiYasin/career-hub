import React from 'react';
import Banner from '../components/Home/Banner';
import Testimonial from '../components/Home/Testimonial';
import Services from '../components/Home/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;