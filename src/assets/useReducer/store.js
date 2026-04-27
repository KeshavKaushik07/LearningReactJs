import { useReducer } from "react";

const initialState = {
    count : 0,
    data : 0
};

const useReducerCoustom = () => {
    const [ state , dispatch ] = useReducer(reducer,initialState);
     
    return [state , dispatch ];
}

const reducer = (state,action) => {
   switch(action.type)
   {
        case "countINC":
            return {...state,count : state.count+1};
        case "countDEC":
            return {...state,count : state.count-1};
        case "countRESET" : 
            return {...state,count:0};
        case "dataINC" : 
            return {...state,data:state.data+1};
        case "dataDEC" : 
            return {...state,data: state.data-1};
        case "dataRESET" : 
            return {...state,data:0};
        default :
            return state
    }
}

export default useReducerCoustom ;