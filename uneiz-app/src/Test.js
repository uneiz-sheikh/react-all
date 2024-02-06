import React, { useMemo, useState } from "react";
import Message from "./Message";


function Test()
{

    const [count,setcount] = useState(0);

    const [num, setNum] = useState([10,20,30,40,]);

    const changecounter = () =>
    {
        let countVal = count;
        countVal = countVal+1;
        setcount(countVal++);
    }

    const submission = useMemo(()=>
    {
        console.log('Hello');
        return num.reduce((p,n)=> p + n);
    },[num])

    const changevalue = () =>
    {
        setNum([10,20,30,40,50]);
    }

    return(
        <>
            <h1>Memo Page</h1> <br></br>
            <button type="button" onClick={() => changecounter()}>Add Number : {count}</button>

            <Message></Message>
            <h1>submission : {submission}</h1>
            <h1 onClick={() => changevalue()}>Usememo</h1>
        </>
    )
}

export default Test;