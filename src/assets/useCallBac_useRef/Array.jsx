import React, { memo } from 'react'

const Array = ({array}) => {
    console.log("array",array);
  return (
    <div>array component</div>
  )
}

export default memo(Array);