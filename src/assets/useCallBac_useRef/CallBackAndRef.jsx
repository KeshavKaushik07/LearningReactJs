import React, { useCallback, useEffect, useRef, useState } from 'react'
import Child from './Child';
import UseCallBack from './UseCallBack';
import UseRef from './UseRef';

const CallBackAndRef = () => {

    // Because of React.memo on every CallBackAndRed render All three Function's ref pass to tree components if change then they re render if not they will not re render ,

    // bacause of useCallBack and useRef ref of function never changes so they aren't re rendring except child Component 

  const [count,setCount] =useState(0);
  const handleNormal = () =>{
    console.log("Button clicked of normal");
  }
  const handleCallBack = useCallback(()=>{
    console.log("Button Clicked of useCallBack");
  },[]);

  const handleUeref = useRef(()=>{
    console.log("Button Clicked of useRef");
  })


  useEffect(()=>{
    console.log("CallBackAndRed re renders");
    console.log("____------------_________");
  })
  return (
    <>
    <p>{count}</p>
    <button onClick={()=>{setCount(count+1)}}>increase</button>
    <Child onClick={handleNormal} />
    <UseCallBack onClick={handleCallBack} />{/* if send count then it re renders because prop changes because of 
    React.memo */}
    <UseRef onClick={handleUeref.current}/>
    </>
  )
}

export default CallBackAndRef
