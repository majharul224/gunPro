
import { useState } from 'react'
import './App.css'
import AllGuns from './Component/AllGuns/AllGuns'
import NavBar from './Component/NavBar/NavBar'

function App() {
  const [counts, setCounts]=useState(0)
  const countIncrease=()=>{
    setCounts(counts+1)
  }

  return (
    <div className='w-[90%] mx-auto'>
    <NavBar
    counts={counts}
    ></NavBar>
    <AllGuns
    countIncrease={countIncrease}
    ></AllGuns>
    </div>
  )
}

export default App
