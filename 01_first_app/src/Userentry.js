import React, { useState } from 'react'
import Display from './Display';

function Userentry() {

        const [products,setproduct] = useState([]);
        const [productindex,setproductindex] = useState();

        const saveProduct = (event) =>
        {
            event.preventDefault();
            let [proname,proprice,proqty] = event.target;
            let product = 
            {
                proname : proname.value,
                proprice : proprice.value,
                proqty : proqty.value
            }
            setproduct([...products,product]);
            event.target.reset();
        };

        const deletproduct = (index) =>
        {
            products.splice(index,1);
            setproduct([...products]);
        }

        const editproduct = (index) =>
        {
            let proforms = document.forms["proforms"];
            proforms.proname.value = products[index].proname;
            proforms.proprice.value = products[index].proprice;
            proforms.proqty.value = products[index].proqty;
            setproductindex([...products]);
        }

        const updateproduct = (event) =>
        {
            let proforms = document.forms['proforms'];
            let product = 
            {
                proname : proforms.proname.value,
                proname : proforms.proprice.value,
                proname : proforms.proqty.value
            }
            
        }


  return (
    <div>
        <form onSubmit={(event) => saveProduct(event)} name='proforms'>
            <label>Product Name</label>
            <input type='text' name='proname'></input>
            <label>Product Price</label>
            <input type='text' name='proprice'></input>
            <label>Product Quantity</label>
            <input type='text' name='proqty'></input>

            <input type='submit' value="Save Product" style={{display : productindex >= 0 ? "none" : "inline-block"}}></input>
            <input type='button' value='Update Product' onClick={(event) => updateproduct(event)} style={{display : productindex < 0 ? "none" : "inline-block"}}></input>
        </form>

        <Display products={products} deletproduct={deletproduct} editproduct={editproduct} ></Display>
    </div>
  )
}

export default Userentry