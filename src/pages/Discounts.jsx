import { Helmet } from 'react-helmet-async';
import discountImg from '../assets/discount.jpg'
import hiring from '../assets/hiring.jpg'
import visa from '../assets/visa.webp'
const Discounts = () => {
    return (
        <>
            <Helmet>
                <title>CareerHub | Special Discount</title>
            </Helmet>
            <div>
                <div className='grid md:grid-cols-2'>
                    <div className='rounded-tr-full rounded-bl-full overflow-hidden'>
                        <img src={discountImg} alt={'Discount'} />
                    </div>
                    <div className='flex flex-col justify-center gap-4 h-full p-4'>
                        <h2 className='text-balance text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Up to 50% OFF! for counselling of higher study</h2>
                        <h2 className='text-balance text-center text-base md:text-xl'>Don't miss this limited-time offer to get expert advice and guidance on your higher education journey. Our experienced counselors are here to help you make informed decisions and achieve your academic goals. Sign up now and take advantage of this exclusive discount!</h2>
                    </div>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className='md:order-2 rounded-tr-full rounded-bl-full overflow-hidden'>
                        <img src={hiring} alt={'Hiring'} />
                    </div>
                    <div className='flex flex-col justify-center gap-4 h-full md:order-1 p-4'>
                        <h2 className='text-balance text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Get job hiring notification for free</h2>
                        <h2 className='text-balance text-center text-base md:text-xl'>Stay updated with the latest job openings and career opportunities. Subscribe to our notification service and be the first to know about new job postings that match your skills and interests. Don't miss out on your dream job – sign up today!</h2>

                    </div>
                </div>
                <div className='grid md:grid-cols-2'>
                    <div className='rounded-tr-full rounded-bl-full overflow-hidden' >
                        <img src={visa} alt={'Hiring'} className='w-full'/>
                    </div>
                    <div className='flex flex-col justify-center gap-4 h-full p-4'>
                        <h2 className='text-balance text-center font-semibold text-xl md:text-3xl lg:text-5xl'>Visa free travel and Meet world entrepreneurs</h2>
                        <h2 className='text-balance text-center text-base md:text-xl'>
                        Explore the world without the hassle of visa applications and meet successful entrepreneurs from around the globe. This unique opportunity allows you to travel freely and connect with industry leaders, innovators, and business moguls. Gain insights, build your network, and get inspired by the stories of those who have made a significant impact in their fields. Don't miss out on this chance to broaden your horizons and take your career to the next level!</h2>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Discounts;