import React from 'react';
import Banner from '../components/Home/Banner';
import Testimonial from '../components/Home/Testimonial';
import Services from '../components/Home/Services';
import Faq from '../components/Home/Faq';
import { ScrollRestoration } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>CareerHub | Home</title>
            </Helmet>
            <div>
                {/* //extra section */}
                <Banner></Banner>

                {/* //required section */}
                <Services></Services>
                <Testimonial></Testimonial>

                {/* //extra section */}
                <Faq></Faq>
            </div>
        </>
    );
};

export default Home;