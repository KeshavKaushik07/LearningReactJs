import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();  // Just like NavLink but when you have to go on other page on bacis of Logic
   const [state,setState] = useState("");
  function handleClick()
  {
   const success = true;
    if(success)
      navigate("/success");
    else
      setState("faild to proceed");
  }
  return (
    <>
    <div>This is Home Page</div>
      
      <button onClick={handleClick}>Proceed </button>

      <p>{state}</p>
    </>

  )
}

const About = () => {
  return (
    <div>
      This is About Page
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      This is Contact Page
    </div>
  )
}

const Success = () => {
  return (
    <>
    <div>Payment successfull </div>
    </>
  )
}

export { Home , About , Contact , Success }


