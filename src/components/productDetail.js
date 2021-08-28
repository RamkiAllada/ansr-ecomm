import React from 'react';
import {Link} from 'react-router-dom'
import ProductImagery from './productImagery';
import ProductMetaData from './productMetaData';
const ProductDetail = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-4 col-12 product-image">
                    <ProductImagery imageData={props.productData.image} prdName={props.productData.name}/>
                </div>
                <div className="col-md-8 col-12 product-detail">
                    <ProductMetaData productData = {props.productData}/>
                </div>
            </div>
            <Link to={'/'} className="floating-link">Home</Link>
        </>
    )
};

export default ProductDetail;