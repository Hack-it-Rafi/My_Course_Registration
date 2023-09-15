import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header'
import Courses from './Components/Courses'
import Details from './Components/Details'

function App() {
  let tot=0;
  let remain=0;
  const [selectCourses, setSelectCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const handleSelectCourse = (title, price, credit) => {
    if (totalCredit + credit <= 20) {
      const newTotalCredit = totalCredit + credit;
      setTotalCredit(newTotalCredit);
      const newArr = [...selectCourses, title];
      setSelectCourses(newArr);
    }
  };

  useEffect(() => {
    const remaining = 20 - totalCredit;
    if(remaining>=0){
      setRemainingCredit(remaining);
    }
  }, [totalCredit]);
  

  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <div className='flex gap-3'>
        <Courses
          handleSelectCourse={handleSelectCourse}
        >

        </Courses>
        <Details
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
          selectCourses={selectCourses}
        >
        </Details>
      </div>
    </div>
      
    </>
  )
}

export default App
