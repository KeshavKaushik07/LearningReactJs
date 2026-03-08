import React from 'react'
import { getContext } from "./ThemeContextProvider";

const ChildC = () => {
    const { theme, setTheme } = getContext();
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