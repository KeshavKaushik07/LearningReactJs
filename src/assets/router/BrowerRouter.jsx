// import React from 'react'
// import { Home, About, Contact } from "./MultiComponents";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NavBar from './NavBar';

// const BrowerRouter = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />{/*need to show with every component */}
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default BrowerRouter

// ________________________________________----------------_________________________________________

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, About, Contact , Success } from "./MultiComponents";
import NavBar from './NavBar';
import Student from './Student';

const BrowerRouter = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <div>
        <NavBar/>
        <Home/>
      </div>
    },
    {
      path : "/about",
      element : <div>
        <NavBar/>
        <About/>
      </div>
    },
    {
      path : "/contact",
      element : <div>
        <NavBar/>
        <Contact/>
      </div>
    },
    {
      path : "/student/:id",
      element : <div>
        <NavBar/>
        <Student/>
      </div>
    },
    {
      path : "/success",
      element : <div>
        <NavBar/>
        <Success/>
      </div>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default BrowerRouter