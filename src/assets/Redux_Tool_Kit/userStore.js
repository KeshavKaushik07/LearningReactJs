import { createReducer } from "@reduxjs/toolkit"

const initialState = {
    name : "mohit",
    age : 20,
    status : "developer"
  }

// export default (state = initialState,action) => {
//     if(action.type == "update_age")
//         return { ...state,age : action.payload }
//     return state;
//     }

export default createReducer(initialState,(builder)=>{
    builder.addCase("update_age",(state,action)=>{
        state.age = action.payload
    });
    builder.addCase("update_name",(state,action)=>{
        state.name = action.payload
    });
    builder.addCase("update_status",(state,action)=>{
        state.status = action.payload
    });

});