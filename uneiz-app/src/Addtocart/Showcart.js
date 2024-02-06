import React from "react";

function Showcart({products})
{
  console.log(products)
    return(
        <>

          <h1>Show Cart Items</h1>

          <div className="table">

            <table border={1} width={"100%"}>
              <thead>
                <tr>
                <th>S.No.</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                
                </tr>
                
              </thead>

              <tbody>
                {products.map((row,index)=>(
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.proname}</td>
                    <td>{row.proprice}</td>
                    <td>{row.proqty}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>

          </div>

        </>
    )
}

export default Showcart;