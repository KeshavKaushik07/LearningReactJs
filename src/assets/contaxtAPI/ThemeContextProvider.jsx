import { createContext, useContext, useState } from "react";
import React from 'react'



const ThemeContext = createContext();// create context


// this function take any component as children and add povider to that children 

// ALL THE IS DEFINE IN THIS FUNCTION TO SHARE EVERYWHERE
const ThemeContextProvider = ({ children }) => {
    let [theme, setTheme] = useState("light");

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeContextProvider;

export const getContext = () => useContext(ThemeContext);// Just to save using  useContext(ThemeContext) in every child component  --- COUSTOM HOOK ---

// export { ThemeContext } // MUST export themeContext