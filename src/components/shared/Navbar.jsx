import { Menu } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeController from './ThemeController';
import useAuth from '../../customHooks/useAuth';

const Navbar = () => {
    const { user, signOutUser } = useAuth();
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl text-warning uppercase font-bold">Career Hub</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    user ?
                        <div className='flex gap-2'>
                            <button className='btn btn-warning' onClick={signOutUser}>Logout</button>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                                    <img src={user.photoURL} alt='user.displayName'/>
                                </div>
                            </div>
                        </div>
                        :
                        <Link to={'/login'} className="btn btn-warning">Get Started</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;