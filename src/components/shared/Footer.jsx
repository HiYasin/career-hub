import React from 'react';
import ContainerX from './ContainerX';

const Footer = () => {
    return (
        <div className='bg-base-200'>
            <ContainerX className="grid md:grid-cols-3 gap-5 justify-center md:justify-between w-full text-base-content py-10 px-4">
                <div className='grid text-center md:text-left sm:grid-cols-3 gap-5 col-span-2'>
                    <nav>
                        <h6 className="footer-title block">Services</h6>
                        <a className="link link-hover block">Branding</a>
                        <a className="link link-hover block">Design</a>
                        <a className="link link-hover block">Marketing</a>
                        <a className="link link-hover block">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title block">Company</h6>
                        <a className="link link-hover block">About us</a>
                        <a className="link link-hover block">Contact</a>
                        <a className="link link-hover block">Jobs</a>
                        <a className="link link-hover block">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title block">Legal</h6>
                        <a className="link link-hover block">Terms of use</a>
                        <a className="link link-hover block">Privacy policy</a>
                        <a className="link link-hover block">Cookie policy</a>
                    </nav>
                </div>
                <form className='text-center md:text-left min-w-[150px] mx-auto'>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset>
                        <div>Enter your email address</div>
                        <div className="join mt-4">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                class="input input-bordered join-item focus:outline-0" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </ContainerX>
        </div>
    );
};

export default Footer;