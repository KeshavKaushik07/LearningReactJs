import React from 'react'
import useCounter from './useCounter'

const CounterOfCoustom = () => {
    const [ data , INC , DEC] = useCounter();
  return (
    <>
    <h1>{data}</h1>
    <button onClick={INC}>+</button>
    <button onClick={DEC}>-</button>
    </>
  )
}

export default CounterOfCoustom