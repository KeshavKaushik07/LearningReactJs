import React from 'react'
import useReducerCoustom from './store'

const CounterOfReduer = () => {
    const [ state , dispatch ] = useReducerCoustom();
  return (
    <>
        <h1>Count Counter : {state.count} </h1>
        <button onClick={()=>dispatch({type : "countINC"})}>+</button>
        <button onClick={()=>dispatch({type : "countDEC"})}>-</button><br />
        <button onClick={()=>dispatch({type : "countRESET"})}>Reset</button>
        <h1>Data Counter : {state.data}</h1>
        <button onClick={()=>dispatch({type : "dataINC"})}>+</button>
        <button onClick={()=>dispatch({type : "dataDEC"})}>-</button><br />
        <button onClick={()=>dispatch({type : "dataRESET"})}>Reset</button>
    </>
  )
}

export default CounterOfReduer