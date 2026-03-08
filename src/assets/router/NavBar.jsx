import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="navRoutes">
       {/* <a href="/">Home</a>
       <a href="/about">About</a>
       <a href="/contact">Contact</a> Cause page Refresh */}


       {/* <Link to={"/"}>Home</Link>
       <Link to={"/about"}>About</Link>
       <Link to={"/contact"}>Contact</Link>  can't access isActive class*/}


       <NavLink to={"/"} className={({isActive}) => isActive ? "activeTab":"links"}>Home</NavLink>
       <NavLink to={"/about"} className={({isActive}) => isActive ? "activeTab":"links"}>About</NavLink>
       <NavLink to={"/contact"} className={({isActive}) => isActive ? "activeTab":"links"}>Contact</NavLink>  
       </div>
    </>
  )
}

export default NavBar