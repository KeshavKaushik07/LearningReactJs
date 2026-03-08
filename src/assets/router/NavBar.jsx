import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="navRoutes">
       <a href="/">Home</a>
       <a href="/about">About</a>
       <a href="/contact">Contact</a>
       </div>
    </>
  )
}

export default NavBar