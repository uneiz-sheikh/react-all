import React, {memo} from "react";

function Child({val,addnew})
{
    console.log("Child component");
    return(
        <>
           
           {val.map((val,index)=>{
          return  <p key={index}>{val}</p>
           })}
            <button onClick={addnew}>Click Change</button>
        </>
    )
}

export default memo(Child);