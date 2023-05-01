import React from 'react';

const CoursesNav = () => {
    return (
        <div className='courses'>
            <div className="dropdown lg:hidden">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>SSC</a></li>
                    <li><a>HSC</a></li>
                </ul>
            </div>
            <div className="navbar bg-base-100 sm:d-none">
                <div className="navbar-center lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a>All</a></li>
                <li><a>SSC</a></li>
                <li><a>HSC</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
            </div>
        </div>
    );
};

export default CoursesNav;