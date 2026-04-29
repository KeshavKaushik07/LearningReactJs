import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const name = useSelector((state) => state.name);
    const age = useSelector((state) => state.age);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Profile ...{` name : ${name} `}</h1>
            <h1>age : {age}</h1>

            <button onClick={() => dispatch({ type: "update_age", payload: 40 })}>update Age</button>
        </>
    )
}

export default Profile