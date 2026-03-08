import React from 'react';
import ChildA from './ChildA';
import ThemeContextProvider from './ThemeContextProvider';


const UseContaxt = () => {
  return (
    <ThemeContextProvider>
        <ChildA/>
    </ThemeContextProvider>
  )
}

export default UseContaxt