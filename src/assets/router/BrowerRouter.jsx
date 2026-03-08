import React from 'react'
import { Home , About , Contact } from "./MultiComponents";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

const BrowerRouter = () => {
  return (
    <>
       <BrowserRouter>
       <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default BrowerRouter
 
// ________________________________________----------------_________________________________________