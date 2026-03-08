import { createContext, useContext, useState } from "react";
import React from 'react'



const ThemeContext = createContext();

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

export const getContext = () => useContext(ThemeContext);

export { ThemeContext }