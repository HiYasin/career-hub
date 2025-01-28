import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';

const Error = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <SectionTitle>404 Erorr</SectionTitle>
                <p className='text-center'>The page you're looking for doesn't exist.</p>
            </div>
        </div>
    );
};

export default Error;