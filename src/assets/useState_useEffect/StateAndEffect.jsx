import React, { useEffect, useState } from 'react';
import Bar from './Bar';

const StateAndEffect = () => {
    const [count,setCount] = useState(0);
    // const [color , setColor] = useState(0);
    useEffect(() => {
      alert("run on StateAndEffect render");
    },)
    useEffect(()=>{
        alert("Run on count increase")
    },[count]);
    useEffect(()=>{
        alert("run first render of StateAndEffect");
    },[]);
    
  return (
    <>
      <div className="counter">
       <p>{count}</p>
       <button onClick={()=>{setCount(count+1)}}>Add</button>
      </div>
      <Bar /> 
      {/* <input type="text" value={count} onChange={(e)=>{setCount(e.target.value)}} />
      <p>h</p> 
      {/* WTF  is Happning */}
      {/* <Handlers/> */}
    </>
  )
}

export default StateAndEffect
