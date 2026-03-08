import React from 'react';
import ChildA from './ChildA';
import ThemeContextProvider from './ThemeContextProvider';


const UseContaxt = () => {
  return (
    <ThemeContextProvider>{/* it's a function that take ChildA is children prop  */}
        <ChildA/>
    </ThemeContextProvider>
  )
}

export default UseContaxt