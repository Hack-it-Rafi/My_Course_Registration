import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Courses from './Components/Courses'
import Details from './Components/Details'

function App() {
  const [selectCourse, setSelectCourse] = useState(0);

  const handleSelectCourse=()=>{
    // console.log("Hello");
  }

  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <div className='flex gap-3'>
        <Courses
          handleSelectCourse={handleSelectCourse}
        >

        </Courses>
        <Details>

        </Details>
      </div>
    </div>
      
    </>
  )
}

export default App
