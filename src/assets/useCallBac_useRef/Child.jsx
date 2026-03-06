import React, { useEffect } from 'react'

const Child = React.memo( (props) => {
        console.log("Child Re renders");

  return (
    <div>
      <button onClick={props.onClick} >Child Button </button>
    </div>
  )
});

export default Child
