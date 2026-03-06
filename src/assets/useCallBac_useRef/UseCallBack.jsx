import React,{useEffect} from 'react'

const UseCallBack = React.memo((props) => {
        console.log("UseCallBacks Re renders");
  return (
    <div>
      {/* <h6>in useCallback {props.count}</h6> if prop change only then re renders */}
      <button onClick={props.onClick}>UseCallBacks Button </button>
    </div>
  )
})

export default UseCallBack
