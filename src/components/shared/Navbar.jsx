import { Menu } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeController from './ThemeController';

const Navbar = () => {
    const navItems = <>
    <li><a>Home</a></li>
    <li><a>My Profile</a></li>
    <li><a>About</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gray-200 p-2 mr-2">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl">Career Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <ThemeController />
                <a className="btn">Get Started</a>
            </div>
        </div>
    );
};

export default Navbar;