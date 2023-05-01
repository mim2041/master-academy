import React, { useEffect, useState } from 'react';
import CoursesNav from '../CoursesNav/CoursesNav';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allCourses')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    })
    
    return (
        <div>
            <CoursesNav></CoursesNav>
            <div>
                <div>
                    <h2>All Courses Category: {courses.length}</h2>
                    {
                        courses.map(course => <Course
                        key={course.id}
                        course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;