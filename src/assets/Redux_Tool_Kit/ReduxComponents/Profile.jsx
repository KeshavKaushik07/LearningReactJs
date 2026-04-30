import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const name = useSelector((state) => state.name);
    const age = useSelector((state) => state.age);
    const status = useSelector((state) => state.status);
    const dispatch = useDispatch();
    return (
        <>
            <h1>Profile ...{` name : ${name} `}</h1>
            <h1>age : {age}</h1>
            <h1>status : {status}</h1>

            <button onClick={() => dispatch({ type: "update_age", payload: 40 })}>update Age</button><br/>
            <button onClick={() => dispatch({ type: "update_name", payload: "hello" })}>update name</button><br/>
            <button onClick={() => dispatch({ type: "update_status", payload: "Doctor" })}>update status</button><br/>
        </>
    )
}

export default Profile