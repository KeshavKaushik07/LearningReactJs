import React, { useEffect } from 'react'

const UseRef = React.memo((props) => {
    
    console.log("UseRef Re renders");
  return (
    <div>
      <button onClick={props.onClick}>UseRef Button</button>
    </div>
  )
})

export default UseRef
