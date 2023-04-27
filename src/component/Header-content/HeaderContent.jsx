import React from 'react';
import './HeaderContent.css';
import headerImg from '../../assets/images/online-education.jpg'

const HeaderContent = () => {
    return (
        <div style={{backgroundImage: `url(${headerImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className='header-content'>
            <div className='header-contents py-10'>
                <h1 className='text-5xl text-amber-400 bg-transparent'>Moduling Tomorrow's Future</h1>
                <div className='search-field mt-8'>
                    <input className='p-3 rounded-lg' type="text" placeholder='Search Your Courses'/>
                    <button className='btn-search bg-slate-500 rounded-lg text-white'>Search</button>
                </div>
                <div className='d-flex flex-row'>
                    <div className='px-5 m-3 py-8 rounded-lg text-white bg-blue-500'>Courses</div>
                    <div className='px-5 py-8 rounded-lg text-white bg-green-500'>Start Learning</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;