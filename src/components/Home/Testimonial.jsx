import React, { useEffect, useState } from 'react';
import TestimonialCard from '../../components/Home/TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SectionTitle from '../shared/SectionTitle';

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setTestimonial(data));
    }, [])
    return (
        <div className='py-10 md:px-10 bg-base-100 my-10'>
            <SectionTitle>What Our Clients Say</SectionTitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    testimonial.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <TestimonialCard testimonial={testimonial}></TestimonialCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;