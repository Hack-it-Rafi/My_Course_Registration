import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Courses from './Components/Courses'
import Details from './Components/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='max-w-screen-xl mx-auto'>
      <Header></Header>
      <div className='flex items-center gap-3'>
        <Courses className="grid grid-cols-3 gap-3"></Courses>
        <Details></Details>
      </div>
    </div>
      
    </>
  )
}

export default App
