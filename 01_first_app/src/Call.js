import React, { useCallback, useState } from 'react';
import Child from './Child';

function Call()
{
    const [count,setCount] = useState(0);
    const [val,setVal] = useState([]);
    const changeCounter = () =>
    {
        setCount(pre => pre + 1);
    }

    // const addproduct = () =>
    // {
    //     setVal((v)=> [...v,"New Product"]);
    // }

    const addproduct = useCallback(()=>{
        setVal((v)=> [...v,"New Product"]);
    },[]);

    return(
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => changeCounter()}>Click</button>
            <Child val={val} addnew={addproduct}></Child>
        </>
    )

}

export default Call;