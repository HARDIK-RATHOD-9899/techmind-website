import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'

const MainRoutes = () => {
  
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    </>
  )
}

export default MainRoutes