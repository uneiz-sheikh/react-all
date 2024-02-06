import React, { useMemo, useState } from "react";
import Message from "./Message";

function Project()
{ 
    const [count,setCount] = useState(0);
    const [num,setNum] = useState([20,30,40,50]);
    
    const counterchange = () =>
    {
       
        let countVal = count;
        countVal = countVal +1;
        setCount(countVal++);
    }



    const sumationchange = useMemo(()=>
    {
        console.log("Hello World");
        return num.reduce((p,n)=> p + n); 
    },[num])

   const changevalue = () =>
   {
        setNum([20,30,40,50,125]);
   }

    return(
        <>
            <h1 onClick={() => counterchange()} >Count : {count}</h1>
            <Message></Message>
            <h1>Sumation : {sumationchange}</h1>
            <h1 onClick={() => changevalue()}> Click Me </h1>
        </>
    )
}

export default Project;