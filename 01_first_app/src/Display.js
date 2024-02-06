import React from 'react'

function Display({products,deletproduct,editproduct}) {
  return (
    <div>
        <table>
            <thead>
                <th>S.No</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
            </thead>
            <tbody>
                {products.map((row,index)=>(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{row.proname}</td>
                        <td>{row.proprice}</td>
                        <td>{row.proqty}</td>

                        <td onClick={() => deletproduct(index)}>Delete Product</td>
                        <td onClick={() => editproduct(index)}>Edit Product</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Display