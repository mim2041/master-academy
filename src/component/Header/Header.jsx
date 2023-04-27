import React, { useState } from 'react';
import headerLogo from '../../assets/images/logo1.png'
import { Link } from 'react-router-dom';
import './Header.css';
import {  Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header'>
            <div>
                <img src={headerLogo} alt="" />
            </div>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                        {open === true ? <XMarkIcon className="h-6 w-6 text-blue-500"/> :
                        <Bars3Icon className="h-6 w-6 text-blue-500"/>}
                    </span>
            </div>
            <nav className={`md:flex absolute md:static duration-500 ${open ? 'top-6' : '-top-64'}`}>
                <Link to="/">Home</Link>
                <Link to="/course">Course</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/mode"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline mr-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </Link>
                <button className='px-10 py-3 rounded-lg bg-blue-600 text-white'>Login</button>
            </nav>
        </div>
    );
};

export default Header;