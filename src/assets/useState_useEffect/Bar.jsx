import React, { useEffect, useState } from 'react'

const Bar = () => {
  const [color,setColor] =useState(0);
    useEffect(()=>{
        alert("run on every bar render");
    });
    useEffect(()=>{
        alert("run on change in color");
    },[color]);
    useEffect(()=>{
        alert("run first time bar renders");
    },[])
  return (
    <>
       <div className="div">
        <p>color is {color}</p>
        <button onClick={()=>{setColor(color+2)}}>incease color</button>
       </div>
    </>
  )
}

export default Bar
