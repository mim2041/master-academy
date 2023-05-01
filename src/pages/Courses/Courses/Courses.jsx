import React, { useEffect, useState } from 'react';
import CoursesNav from '../CoursesNav/CoursesNav';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    
    return (
        <div>
            <CoursesNav></CoursesNav>
        </div>
    );
};

export default Courses;