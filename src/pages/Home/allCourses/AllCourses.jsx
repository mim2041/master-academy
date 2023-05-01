import React, { useEffect, useState } from 'react';
import HomeCards from '../HomeCards/HomeCards';
import './AllCourses.css'

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allCourses')
        .then(res => res.json())
        .then(data => setCourses(data))
        .catch(error => console.error(error))
    })

    return (
        <div>
            <h2 className='text-center bg-green-400 my-5 py-5 text-3xl text-white font-semibold'>Our All Courses</h2>
            <div className='allCourses'>
                {
                    courses.map(course => <HomeCards
                    key={course.id}
                    course={course}
                    ></HomeCards>)
                }
            </div>
        </div>
    );
};

export default AllCourses;