import React from 'react';
import Detail from './Detail';

const Details = ({totalCredit,remainingCredit, selectCourses}) => {
    return (
        <div className='w-1/4 '>
            <div className='rounded-lg bg-white p-3'>
                <div className='text-center'>
                    <h3 className='text-[#2F80ED] text-base font-bold my-3'>Creidt Hour Remaining: {remainingCredit}</h3>
                    <hr />
                </div>
                <div>
                    <h3 className='text-base font-bold my-3'>Course Name: </h3>
                    <ol>
                        {
                            selectCourses.map((selectCourse,idx)=><Detail key={idx} selectCourse={selectCourse}></Detail>)
                        }
                    </ol>
                    <hr />
                </div>
                <div>
                <h3 className='text-base font-bold my-3'>Total Credit Hour: {totalCredit}</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;