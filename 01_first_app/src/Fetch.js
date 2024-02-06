import React, { useEffect, useState } from "react";

function Fetch()
{
    const [product,setProduct] = useState([]);

    const getproduct = () =>
    {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setProduct([...res]))
    }

    useEffect(()=>
    {
        getproduct();
    },[]);

    return(
        <>
            <ul>
                {product.map((pro)=>{
                   return <li>{pro.price}</li>
                })}
            </ul>
        </>
    )
}

export default Fetch;