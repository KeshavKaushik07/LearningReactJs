const initialState = {
    name : "mohit",
    age : 20,
    status : "developer"
  }

export default (state = initialState,action) => {
    if(action.type == "update_age")
        return { ...state,age : action.payload }
    return state;
     
    }