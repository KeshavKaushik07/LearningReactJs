import React from 'react'
import { getContext } from "./ThemeContextProvider";

const ChildC = () => {

    // this getCntext function taking the reference of useContext and ThemeContext from ./ThemeContextProvider so we don't need to import these here 
    const { theme, setTheme } = getContext(); // use COUSTOM HOOK 
    return (
        <>
            <div>ChildC : {theme}</div>
            <button onClick={() => {
                if (theme == "light") 
                     setTheme("Black"); 
                else 
                    setTheme("light");
            }
            }>toggle theme</button>
        </>
    )
}

export default ChildC