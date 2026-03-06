import React, { useState } from 'react'

const Handlers = () => {
    const [form,setForm] = useState({ email :"",phone :"" });
    const handleInput = (e)=>{
        // console.log(...form);
        setForm({...form,[e.target.name]: e.target.value});
        // console.log(form);
    }
  return (
    <div>
      <input type="email" name="email" value={form.email} onChange={handleInput}/>
      <input type="text" name='phone' value={form.phone} onChange={handleInput}/>
    </div>
  )
}

export default Handlers
