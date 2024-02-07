import React, { useEffect, useReducer } from 'react'
import { reducer } from './Reducer'
import { intialdata } from './Store'

function City() {

    const [citys,dispatch] = useReducer(reducer,intialdata);
    const getcity = ()=>
    {
        dispatch({type:"Get"})
    }
    useEffect(()=>{
        getcity()
    },[]);

    const addcity = (event) =>
    {
        event.preventDefault();
        dispatch({type:"Add",payload:event.target.city.value})
        event.target.city.value = "";
    }


  return (

    <ul>
        <form onSubmit={(event)=> addcity(event)}>
            <input type='text' id='city'></input>
            <button type='submit' value="Add City">Add City</button>
        </form>
        {citys.map((city,index)=>(
            <li key={index}>{city}</li>
        ))}
    </ul>

  )
}

export default City