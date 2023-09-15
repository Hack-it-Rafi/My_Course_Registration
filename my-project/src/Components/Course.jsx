import React from 'react';
import { FaBook, FaDollarSign } from 'react-icons/fa';

const Course = ({ course, handleSelectCourse }) => {
    const { id, cover, title, description, price, credit } = course
    return (
        <div className='bg-white rounded-lg p-2 flex justify-center'>
            <div className='w-[95%]'>
                <img className='mx-auto' src={cover} alt="" />
                <h3 className='text-lg font-bold mt-3'>{title}</h3>
                <p className='text-[#1C1B1B99] text-sm text-justify'>{description}</p>
                <div className='flex justify-between items-center mt-3'>
                        <div className='flex items-center'>
                            <FaDollarSign className='text-green-800'></FaDollarSign>
                            <h3 className='text-sm'>Price: {price}</h3>
                        </div>
                        <div className='flex items-center gap-1'>
                            <FaBook></FaBook>
                            <h3 className='text-sm'>Credit: {credit}hr</h3>
                        </div>                  
                </div>
                <div className='flex justify-center'>
                    <button onClick={()=>handleSelectCourse(title, price, credit)} className='bg-[#2F80ED] text-white text-center w-full py-2 mt-4 rounded-lg'>Select</button>
                </div>
            </div>
        </div>
    );
};

export default Course;