import React from 'react';

const ProductMetaData  = ({productData}) => {
    return (
        <>
            <h1>
                {productData.product_name.toUpperCase()}
            </h1>
            <table className="table">
            <tbody>  
                <tr>
                    <th>
                        id
                    </th>
                    <td>
                        {productData.uniq_id}
                    </td>
                </tr>          
                <tr>
                    <th>
                        Rating
                    </th>
                    <td>
                    {productData.product_rating}
                    </td>
                </tr>
                <tr>
                    <th>
                        Overall Rating
                    </th>
                    <td>
                    {productData.overall_rating}
                    </td>
                </tr>
                <tr>
                    <th>
                        Brand
                    </th>
                    <td>
                        {productData.brand}
                    </td> 
                </tr>
                <tr>
                    <th>
                        Description
                    </th>
                    <td>
                        {productData.description}
                    </td> 
                </tr>
                <tr>
                    <th>
                        Retail Price
                    </th>
                    <td>
                       <strike>{productData.retail_price}</strike>/-
                    </td>
                </tr>
                <tr>
                    <th>
                        Discounted Price
                    </th>
                    <td>
                        {productData.discounted_price}/-
                    </td>
                </tr>
            </tbody>
            </table>
        </>
    )
}
export default ProductMetaData;