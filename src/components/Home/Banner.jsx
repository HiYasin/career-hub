import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='grid md:grid-cols-2 gap-10 justify-between items-center py-5 bg-base-100 px-4'>
            <div className='grid gap-4'>
                <h1 className='text-2xl md:text-5xl text-warning font-bold text-balance text-center md:text-left'>
                Empowering Your Journey to Professional Success
                </h1>
                <h2 className='text-md md:text-lg lg:text-xl text-neautral text-balance text-center md:text-left'>
                Unlock your potential with personalized career advice, guidance, and resources tailored to help you make informed decisions for a brighter professional future.
                </h2>
            </div>
            <div className='border-black border-2 p-4  md:rounded-tr-[166px]  md:rounded-bl-[166px]'>
                <div className=' md:rounded-tr-[150px]  md:rounded-bl-[150px] overflow-hidden'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;