import React from 'react';
import './HomeCards.css';

const HomeCards = ({course}) => {
    const {id, course_name, course_img, course_group, category_name, course_prize, lecture_quantity, course_duration} = course;
    // console.log(course_duration);
    return (
        <div>
            <div className="card w-72 bg-base-100 rounded-lg shadow-xl">
            <figure><img src={course_img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-center text-blue-600">{course_name}</h2>
                <ul className="text-left">
                    <li>For {course_group} - 2023</li>
                    <li>Course duration - {course_duration}</li>
                    <li>No of Lecture - {lecture_quantity}</li>
                </ul>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Details</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeCards;