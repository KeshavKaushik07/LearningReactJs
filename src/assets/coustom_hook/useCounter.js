import { useState } from "react"


const useCounter = () => {

    const [ data ,setData ] = useState(0);

    const INC = () => {
        setData(data + 1 );
    }

    const DEC = () => {
        setData(data - 1 );
    }

    return [data,INC,DEC];
}

export default useCounter