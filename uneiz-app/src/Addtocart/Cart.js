import React, { useState } from 'react'
import Showcart from './Showcart';

function Cart() {

  const [products,setproduct] = useState([]);

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

  }



  return (

    <>
      <div className='container'>

        <div className='row'>
    
          <h1>Add To Cart</h1>

            <form onSubmit={(event) => saveProduct(event)}>
              
              <label>Product Name</label><br/>
              <input type='text' name='proname'></input> <br/><br/>

              <label>Product Price</label><br/>
              <input type='text' name='proprice'></input> <br/><br/>

              <label>Product Quantity</label><br/>
              <input type='text' name='proqty'></input> <br/><br/>

              <input type='submit' value='Save Product'></input>
          
            </form>


          {
            products.length > 0 ? <Showcart products={products}></Showcart> : false
          }

        </div>

      </div>
    </> 

  )
}

export default Cart;