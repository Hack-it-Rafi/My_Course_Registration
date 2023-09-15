import React, { useEffect, useState } from 'react';
import Course from './Course';

const Courses = ({handleSelectCourse}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('Courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[])
    return (
        <div className='w-3/4'>
            <div className="grid grid-cols-3 gap-3">
                {
                    courses.map(course=><Course
                    key={course.id}
                    course={course}
                    handleSelectCourse={handleSelectCourse}
                    ></Course>)
                }
            </div>
        </div>
        
    );
};

export default Courses;