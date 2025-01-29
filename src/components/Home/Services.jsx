import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from '../shared/SectionTitle';

const Services = () => {
    const [services, setServices] = useState()
    useEffect(() => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);
    //console.log(services);
    return (
        <>
            <SectionTitle>Services</SectionTitle>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-between py-5'>
                {
                    services && services.map((service, index) =>
                        <ServiceCard key={index} service={service} />
                    )
                }
            </div>
        </>
    );
};

export default Services;