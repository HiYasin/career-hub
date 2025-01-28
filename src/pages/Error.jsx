import React from 'react';
import {  ShieldAlert } from 'lucide-react';
import { MdError } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <div className='flex flex-col items-center justify-center'>
                <MdError className='text-center text-9xl text-red-600'></MdError>
                <h2 className='text-9xl font-blold text-center'>404</h2>
                <h2 className='text-5xl text-center'>Error</h2>
                <p className='text-center'>The page you're looking for doesn't exist.</p>
                <div className='py-3'>
                    <Link to={'/'} className='btn btn-warning'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;