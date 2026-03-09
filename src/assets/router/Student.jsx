import React from 'react'
import { useParams } from 'react-router-dom'

const Student = () => {
    const { id } = useParams();
  return (
    <>
      <p>Student's ID : <b>{id}</b></p>
    </>
  )
}

export default Student